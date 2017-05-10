import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import * as actions from '../actions/lists-actions';

class Checklists extends Component {
  componentDidMount() {
    this.props.fetchLists();
  }

  render() {
    const { lists } = this.props.lists;

    if (!lists) {
      return null;
    }

    return (
      <div className="checklists">
        <h2>All checklists</h2>
        {lists.map(this.renderLists)}
      </div>
    );
  }

  renderLists(list) {
    return (
      <div key={list._id}>
        <Link to={`/check-lists/${list._id}`}>{list.name || ''}</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: state.lists
  };
}

export default withRouter(connect(mapStateToProps, actions)(Checklists));