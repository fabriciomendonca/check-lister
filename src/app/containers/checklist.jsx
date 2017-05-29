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

  createTask (formProps) {
    this.props.createTask(formProps, this.props.list._id);
  }

  toggleTask (task) {
    const completedAt = task.completedAt > 0 ? 0 : new Date().getTime();

    this.props.updateList({completedAt, _id: task._id});
  }

  renderTasks () {
    if (!!this.props.list.tasks.length) {
      return (
        <div className="list-group">
          {
            this.props.list.tasks.map(this.renderTask.bind(this))
          }
        </div>
      );
    }
  }

  renderTask (task) {
    const completed = task.completedAt > 0 ? 'completed' : '';
    return (
      <div key={task._id} className={`list-group-item ${completed}`}>
        <span className={`complete-task`} onClick={() => this.toggleTask(task)}>
          <i className="material-icons">check</i>
        </span>
        {task.name}
      </div>
    );
  }

  render() {
    if (!this.props.list) {
      return null;
    }

    const { handleSubmit } = this.props;

    return (
      <div className="checklist content d-flex flex-column">
          <form onSubmit={handleSubmit(this.createTask.bind(this))}>
            <Field
              type="text"
              name="name"
              title="Add a new task"
              component={InputField}
              className="d-flex flex-row flex" />
            <button className="btn btn-primary">Add a new task</button>
          </form>
          <h3 className="my-3 mx-0">{this.props.list.name}</h3>
          {this.renderTasks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.lists.selected,
  };
}

const Composed = reduxForm({
  form: 'newTask'
})(CheckList);
export default withRouter(connect(mapStateToProps, actions)(Composed));