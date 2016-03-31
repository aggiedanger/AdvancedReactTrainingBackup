const Authentication = require('./controllers/authentication');

module.exports = function(app) {

  //req is the http request; res is the http response; next is for errors
  app.get('/', function(req, res, next) {
    res.send(['hello world', 'water', 'phone']);
  });

  app.post('/signup', Authentication.signup);

}
