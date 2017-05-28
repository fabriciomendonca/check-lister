import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import * as actions from '../actions/lists-actions';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home content">
        <div className="home__content d-flex flex-column justify-content-center align-items-center">
          <div className="home__text">
            Your tasks in a simple way
          </div>
          <Link className="home__button btn" to="/signup">Sing up</Link>
        </div>
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