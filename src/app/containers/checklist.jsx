import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter, Link } from 'react-router-dom';

import * as actions from '../actions/lists-actions';

import InputField from '../components/input-field';

class CheckList extends Component {
  componentDidMount() {
    this.props.fetchList(this.props.match.params.id);
  }

  render() {
    if (!this.props.list) {
      return null;
    }

    return (
      <div className="checklist content d-flex flex-column">
          <form>
            <Field
              type="text"
              name="new_task"
              title="New task"
              component={InputField}
              className="d-flex flex-row flex" />
            <button className="btn btn-primary">Add</button>
          </form>
          <h3 className="my-3 mx-0">{this.props.list.name}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.lists.selected
  };
}

const Composed = reduxForm({
  form: 'newTask'
})(CheckList);
export default withRouter(connect(mapStateToProps, actions)(Composed));