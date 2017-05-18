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
      <div className="checklists d-flex flex-column w-100">
        <h2 className="m-3">All checklists</h2>
        {lists.map(this.renderLists)}
      </div>
    );
  }

  renderLists(list) {
    return (
      <div className="list-group m-3" key={list._id}>
        <Link to={`/check-lists/${list._id}`} className="list-group-item list-group-item-action">
          <h5 className="mb-0">{list.name || ''}</h5>
        </Link>
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