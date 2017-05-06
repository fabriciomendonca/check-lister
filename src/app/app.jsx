import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Components
import Home from './components/home';

import rootReducer from './reducers/root-reducer';


const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <h1>Check lister</h1>
            <Route extact path="/" component={Home}></Route>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;