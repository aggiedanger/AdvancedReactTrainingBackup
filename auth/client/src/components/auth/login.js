import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import LoginFields from './login_fields';

class Login extends Component {

  render(){
      return(
        <LoginFields title='Login' login={this.props.login} />
      );
    }
  }
export default connect(null, actions)(Login);
