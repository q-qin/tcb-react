import React, { Component } from 'react'
import { Layout } from 'antd'
import AdminSider from './Sider'
import AdminHeader from './Header'
import AdminFooter from './Footer'
import AdminSetting from './Setting'

import style from './UserCenter.module.less'
const { Content } = Layout


export class UserCenter extends Component {
  render() {
    return (
      <Layout className={style.layout}>
        <AdminSider />
        <AdminSetting />
        <Layout>
          <AdminHeader />
          <Content className={style.content}>
            {this.props.children}
          </Content>
          <AdminFooter />
        </Layout>
      </Layout>
    )
  }
}