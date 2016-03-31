import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions'

class Login extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props){
    this.props.login(props)
      .then(() => {
          this.context.router.push("/");
      });
  }

  render(){
    const {fields: {email, password}, handleSubmit} = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h3>Login</h3>

          <div className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}` }>
            <input
              type="text"
              placeholder="email"
              id="email"
              className="form-control"
              {...email} />
            <div className="text-help">
              {email.touched ? email.error : ''}
            </div>
          </div>

          <div className={`form-group ${password.touched && password.invalid ? 'has-danger' : ''}` }>
            <input
              type="text"
              placeholder="password"
              id="password"
              className="form-control"
              {...password}/>
            <div className="text-help">
              {password.touched ? password.error : ''}
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
      </form>
    );
  }
}

function validate(values){
    let errors = {};

    if(!values.email){
      errors.email = 'Enter an email';
    }
    if(!values.password){
      errors.password = 'Enter a password';
    }

    return errors;
}

export default reduxForm({
    form: 'LogInForm',
    fields: ['email', 'password'],
    validate
}, null, actions)(Login);
