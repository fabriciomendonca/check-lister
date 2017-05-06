import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/lists-actions';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchLists();
  }

  render() {
    return (
      <div className="home">
        {this.props.lists.map(this.renderLists)}
      </div>
    );
  }

  renderLists(list) {
    return (
      <div
        key={list._id}
        className="list-item">{list.name}</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    lists: state.lists
  };
}

export default connect(mapStateToProps, actions)(Home);