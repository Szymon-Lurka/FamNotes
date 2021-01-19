import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from '../routes';
import MainPage from './MainPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import MainTemplate from '../components/templates/MainTemplate';
import JoinRoom from './JoinRoom';
import CreateRoom from './CreateRoom';
import MyRooms from './MyRooms';
import Settings from './Settings';
import AboutApp from './AboutApp';

function Root() {
  return (
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={MainPage} />
          <Route exact path={routes.login} component={LoginPage} />
          <Route exact path={routes.register} component={RegisterPage} />
          <Route exact path={routes.info} component={AboutApp} />
          <Route exact path={routes.settings} component={Settings} />
          <Route exact path={routes.myRooms} component={MyRooms} />
          <Route exact path={routes.joinRoom} component={JoinRoom} />
          <Route exact path={routes.createRoom} component={CreateRoom} />
        </Switch>
      </MainTemplate>
    </Router>
  );
}

export default Root;
