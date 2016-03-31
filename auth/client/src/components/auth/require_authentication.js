import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent, loginPath) {

  class Authentication extends Component {

    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount(){
      if(!this.props.authenticated){
        this.context.router.push(loginPath);
      }
    }

    componentWillUpdate(nextProps){
      if(!nextProps.authenticated){
        this.context.router.push(loginPath);
      }
    }

    render(){
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state){
    return{
      authenticated: state.authentication.authorized
    }
  }

  return connect(mapStateToProps)(Authentication);
}
