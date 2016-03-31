import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import LoginFields from './login_fields';
import * as actions from '../../actions';

class SignUp extends Component {

    render(){
        return(
          <LoginFields title='Sign Up' login={this.props.signup} />
        );
      }
    }

export default connect(null, actions)(SignUp);
