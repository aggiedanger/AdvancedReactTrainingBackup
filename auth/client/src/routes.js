import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SignUp from './components/auth/sign-up';
import LogIn from './components/auth/login';
import Home from './components/home';
import requireAuth from './components/auth/require_authentication';

export default (
  <Route path="/" component={App}>
    <Route path="signup" component={SignUp} />
    <Route path="login" component={LogIn} />
    <IndexRoute component={requireAuth(Home, 'login')} />
  </Route>
);
