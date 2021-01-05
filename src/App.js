import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import SingleTrip from './Pages/SingleTrip';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/myTrip' component={SingleTrip} />
      </Switch>
    </Router>
  );
};

export default App;