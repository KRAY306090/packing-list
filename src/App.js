import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import SingleTrip from './Pages/SingleTrip';
import Entry from './Pages/Entry';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/myTrip' component={SingleTrip} />
        <Route exact path='/' component={Entry} />
      </Switch>
    </Router>
  );
};

export default App;