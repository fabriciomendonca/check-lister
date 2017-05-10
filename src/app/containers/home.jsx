import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/lists-actions';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="home">
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: state.lists
  };
}

export default withRouter(connect(mapStateToProps, actions)(Home));