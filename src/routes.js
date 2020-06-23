import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Detail from './pages/DetailItem';
import Purchase from './pages/Purchase';
import PageNotFound from './pages/PageNotFound/';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/login" component={ Login } />
    <Route exact path="/profile" component={ Profile } />
    <Route exact path="/search" component={ Search } />
    <Route exact path="/purchase" component={ Purchase } />
    <Route exact path="/detail/:id" component={ Detail } />
    <Route path="*" component={ PageNotFound } />
  </Switch>
);

export default Routes;