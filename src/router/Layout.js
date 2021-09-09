import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Basic } from '@/layout/Basic';
import { UserCenter } from '@/layout/UserCenter';

export class Layout extends Component {
  render() {
    const { location, config } = this.props;
    const { pathname } = location;
    const isLogin = localStorage.getItem('_token')
    const targetRouterConfig = config.find((v) => v.path === pathname);

    if (targetRouterConfig) {
      if(!targetRouterConfig?.meta?.auth){
        // basic Layout
        if (pathname === '/login') {
          return <Route exact path={pathname} component={targetRouterConfig.component} />
        }
        return <Basic><Route exact path={pathname} component={targetRouterConfig.component}/></Basic>
        // return <UserCenter><Route exact path={pathname} component={targetRouterConfig.component}/></UserCenter>
      }else{
        // user Layout
        // 已登录
        if (isLogin) {
          return <UserCenter><Route exact path={pathname} component={targetRouterConfig.component}/></UserCenter>
        }else{
          // 未登录
          return <Redirect to='/login' />
        }
      }
    }else{
      return <Redirect to='/404'/>
    }
  }
}