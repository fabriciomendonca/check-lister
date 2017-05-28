import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/user-actions';

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render () {
    return (
      <div className="alert alert-info">Signing out user</div>
    );
  }
}

export default withRouter(connect(null, actions)(Signout));