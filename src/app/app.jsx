import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';

// HOC
import requireAuth from './hoc/require-auth';

// Components
import NavBar from './components/navbar';
import Home from './containers/home';
import Signup from './containers/signup';
import Signout from './containers/signout';
import Checklists from './containers/checklists';
import Checklist from './containers/checklist';

class App extends Component {
  render() {
    return (
      <div className="d-flex flex-column w-100 align-items-center full-width">
        <NavBar authenticated={this.props.authenticated} />
        
        <Switch>
          <Route exact path="/check-lists/:id" component={requireAuth(Checklist)}></Route>
          <Route exact path="/check-lists" component={requireAuth(Checklists)}></Route>
          <Route exact path="/signup" render={() =>(
            !this.props.authenticated ? <Signup /> : <Redirect to="/check-lists" />
          )}/>
          <Route exact path="/signout" render={() =>(
            this.props.authenticated ? <Signout /> : <Redirect to="/" />
          )}/>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.user.authenticated,
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps)(App));