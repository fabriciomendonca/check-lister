import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import thunk from 'redux-thunk';
import rootReducer from './app/reducers/root-reducer';
import App from './app/app';
import {AUTH_USER} from './app/actions/types';

import style from './assets/scss/main.scss';

const store = createStore(rootReducer, applyMiddleware(thunk));

const user = JSON.parse(localStorage.getItem('user'));
if (user) {
  store.dispatch({
    type: AUTH_USER,
    payload: user
  });
}

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ), document.querySelector('#root'));
