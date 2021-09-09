import React, { Component } from 'react'
import { Layout, Dropdown, Avatar, Menu, message } from 'antd'
import {
  SettingOutlined,
  GitlabOutlined
} from '@ant-design/icons'
import { connect } from 'react-redux'
import { setSetting } from '@/store/actions'
import style from './index.module.less'

const { Header } = Layout

class AdminHeader extends Component {
  logOut = ()=>{
    localStorage.removeItem('_token');
    message.success('登出成功~');
    setTimeout(()=>{
      window.location.href = '/'
    }, 1e3)
  }
  render () {
    const { toggleSetting, theme } = this.props
    const menu = (
      <Menu onClick={this.logOut}>
        <Menu.Item style={{width:'160px'}} key="1">退出登录</Menu.Item>
      </Menu>
    )
    return (
      <Header
        className={`flex align-center justify-end ${style.header}`}
        style={theme !== 'night' ? {backgroundColor: '#fff'} : {}}
      >
        <GitlabOutlined
          className={style['header-icon']}
        />
        <SettingOutlined
          className={style['header-icon']}
          onClick={ toggleSetting }
        />
        <Dropdown overlay={menu}>
          <Avatar />
        </Dropdown>
      </Header>
    )
  }
}
const mapStateToProps = (state) => ({
  theme: state.theme
})
const mapDispatchToProps = (dispatch) => ({
  toggleSetting: () => dispatch(setSetting())
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader)