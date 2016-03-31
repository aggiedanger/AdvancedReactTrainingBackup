import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Header extends Component {

  render(){

    const btnTxt = this.props.authenticated ? 'Sign Out' : 'Sign In';
    
    return(
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/resources">Resources</Link>
            </li>
            <li className="nav-item">
              <button onClick={() => this.props.authenticate()}>{btnTxt}</button>
            </li>
          </ul>
        </nav>
    )
  }
}

function mapStateToProps(state){
  return{
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps, actions)(Header);
