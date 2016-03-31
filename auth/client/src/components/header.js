import React, { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import NavItemLink from './common/nav_item_link';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Header extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  handleLoginClick(event){
    if(this.props.authenticated){
      this.props.logout();
    }else{
      this.context.router.push('/login');
    }
  }

  render(){
  return(
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">React-Bootstrap</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItemLink txt="Sign Up" path="signup" />
        <NavItem onClick={this.handleLoginClick.bind(this)}>{this.props.authenticated ? "Logout" : "Login"}</NavItem>
      </Nav>
    </Navbar>

  );
}
}

function mapStateToProps(state){
  return {
    authenticated: state.authentication.authorized
  }
}

export default connect(mapStateToProps, actions)(Header);
