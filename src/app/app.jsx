import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/root-reducer';

const store = applyMiddleware(thunk)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={store(rootReducer)}>
        <Router>
          <h1>Check lister</h1>
        </Router>
      </Provider>
    );
  }
}

export default App;