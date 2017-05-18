import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import * as actions from '../actions/lists-actions';

import List from '../components/list';

class CheckList extends Component {
  componentDidMount() {
    this.props.fetchList(this.props.match.params.id);
  }

  render() {
    if (!this.props.list) {
      return null;
    }
    return (
      <List data={this.props.list} />
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.lists.selected
  };
}

export default withRouter(connect(mapStateToProps, actions)(CheckList));