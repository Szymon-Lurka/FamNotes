import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from '../routes';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

function Root() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.home} component={MainPage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.register} component={RegisterPage} />
      </Switch>
    </Router>
  );
}

export default Root;
