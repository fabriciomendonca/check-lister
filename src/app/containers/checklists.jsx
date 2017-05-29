import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter, Link } from 'react-router-dom';
import InputField from '../components/input-field';

import * as actions from '../actions/lists-actions';

class Checklists extends Component {
  componentDidMount() {
    this.props.fetchLists();
  }

  createCheckList (formProps) {
    this.props.createList(formProps);
  }

  render() {
    const { lists } = this.props.lists;
    const { handleSubmit } = this.props;

    if (!lists) {
      return null;
    }

    return (
      <div className="checklists content d-flex flex-column">
        <h2 className="m-3">All checklists</h2>
        <form onSubmit={handleSubmit(this.createCheckList.bind(this))}>
          <Field
            type="text"
            name="name"
            title="New check list"
            component={InputField}
            className="d-flex flex-row flex" />
          <button className="btn btn-primary">Create new checklist</button>
        </form>
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

const Composed = reduxForm({ form: 'newChecklist'})(Checklists);

export default withRouter(connect(mapStateToProps, actions)(Composed));