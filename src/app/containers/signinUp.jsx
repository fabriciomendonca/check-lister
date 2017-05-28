import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import isEmail from 'validator/lib/isEmail';
import * as actions from '../actions/user-actions';

import InputField from '../components/input-field';

class SigninUp extends Component {
  handleFormSubmit (formProps) {
    this.props.signinUp(formProps, this.props.type);
  }

  render () {
    const {handleSubmit} = this.props;
    return (
      <div className="signup content">
        <h2>{this.props.type}</h2>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field
              name="email"
              title="E-mail"
              component={InputField}
              type="text" />
          <Field
              name="password"
              title="Password"
              component={InputField}
              type="password" />
          {
            this.props.type === 'Signup' ? <Field
              name="passwordConfirm"
              title="Password confirm"
              component={InputField}
              type="password" />
              :
              ''
          }
          <button action="submit" className="btn btn-primary">{this.props.type}</button>
        </form>
      </div> 
    )
  }
}

const validate = (formProps, props) => {
  const errors = {};
  
  if (props.type === 'signup' && formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  if (!isEmail(formProps.email || '')) {
    errors.email = 'Please, inform a valid email';
  }

  return errors;
}

const Combined = reduxForm({
  form: 'signup',
  validate
})(SigninUp);

export default withRouter(connect(null, actions)(Combined));