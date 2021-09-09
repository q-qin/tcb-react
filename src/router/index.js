import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import { Login } from '@/views/login/index';
import Home from '@/views/index/index';
import { notFound } from '@/views/notFound';
import { Layout } from './Layout';
import asyncRouters from './async';


const BasicRouters = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/404',
    component: notFound,
  },
  ...asyncRouters
];


export class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/404' component={notFound} />
          <Layout config={BasicRouters} />
        </Switch>
      </HashRouter>
    )
  }
}