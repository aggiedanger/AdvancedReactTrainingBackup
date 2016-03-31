const User = require('../models/user');
const config = require('../config');
const jwt = require('jwt-simple');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password) {
    return res.status(422).send({ error: 'You must provide a valid email and password' });
  }

  // See if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser){
    if(err) { return next(err); }

    // If a user with email does exist, return an errors
    if(existingUser) {
      return res.status(422).send({ error: 'Email is already in use' });
    }

    // If a user with email does not exist, create and save user record
    const user = new User({
      email: email,
      password: password
    });

    //Call to actually save user to DB
    user.save(function(err){
      if(err){ return next(err); }

      // Respond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    });
  });

}

exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  res.json({ token: tokenForUser(req.user) });
}