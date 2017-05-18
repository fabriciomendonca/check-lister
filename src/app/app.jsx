import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Components
import NavBar from './components/navbar';
import Home from './containers/home';
import Checklists from './containers/checklists';
import Checklist from './containers/checklist';

import rootReducer from './reducers/root-reducer';


const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="d-flex flex-column w-100 align-items-center full-width">
            <NavBar />
            
            <Switch>
              <Route exact path="/check-lists/:id" component={Checklist}></Route>
              <Route exact path="/check-lists" component={Checklists}></Route>
              <Route path="/" component={Home}></Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;