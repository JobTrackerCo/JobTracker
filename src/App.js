import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import HomeView from './components/HomeView/HomeView';
import DashboardView from './components/DashboardView/DashboardView';
import AdminView from './components/AdminView/AdminView';


import './App.css';

class App extends Component {





  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route
              path="/admin"
              component={AdminView}
            />
            <Route
              path="/home"
              component={HomeView}
            />
            <Route
              path="/dashboard"
              component={DashboardView}
            />
            {/* <Route render={() => <h1>404</h1>} /> */}
          </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
