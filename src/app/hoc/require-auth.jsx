import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Redirect
} from 'react-router-dom'

export default (ComposedComponent) => {
  class Authentication extends Component {
    render () {
      return this.props.authenticated ? <ComposedComponent {...this.props} /> : <Redirect to="/" />;
    }
  }

  const matpStateToProps = (state) => {
    return {
      authenticated: state.user.authenticated
    };
  };

  return connect(matpStateToProps)(Authentication);
};