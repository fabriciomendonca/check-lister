import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import * as actions from '../actions/lists-actions';

import List from '../components/list';

class CheckList extends Component {
  componentDidMount() {
    this.props.fetchList(this.props.match.id);
  }

  render() {
    return (
      <div className="check-list">
        <List data={this.props.list} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.list
  };
}

export default withRouter(connect(mapStateToProps, actions)(CheckList));