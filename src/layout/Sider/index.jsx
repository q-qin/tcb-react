import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { connect } from 'react-redux'
import asyncRouters from '@/router/async'
import style from './index.module.less'

const { Sider } = Layout
const { SubMenu } = Menu

class AdminSider extends Component {

  state = {
    current: asyncRouters.length ? asyncRouters[0].path : ''
  }

  handleClick = e => {
    this.setState({
      current: e.key
    })
  }

  render () {
    const { theme } = this.props
    return (
      <Sider
        collapsible 
        theme={theme}
        width={175}
        style={{minHeight: '100vh'}}
      >
        <div className={`${style.logo}`} />
        <Menu
          mode="inline"
          theme={theme}
          selectedKeys={[this.state.current]}
          onClick={this.handleClick}
        >
          {
            asyncRouters.map(v => {
              let template = ''
              if (!v.children) {
                // 不存在子菜单
                template = v.hidden ? null : (
                  <Menu.Item
                    key={v.path}
                    icon={v?.meta?.icon}
                  >
                    <NavLink to={v.path}>{v?.meta?.title || '未定义'}</NavLink>
                  </Menu.Item>
                )
              } else {
                // 存在子菜单
                template = (
                  <SubMenu
                    title={v?.meta?.title}
                    icon={v?.meta?.icon}
                    key={v.path}
                  >
                    {
                      v.children.map(v => {
                        return v.hidden ? null : (
                          <Menu.Item
                            key={v.path}
                          >
                            <NavLink to={v.path}>{v?.meta?.title || '未定义'}</NavLink>
                          </Menu.Item>
                        )
                      })
                    }
                  </SubMenu>
                )
              }

              return template
            })
          }
        </Menu>
      </Sider>
    )
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme === 'light' ? 'light' : 'dark'
})

export default connect(mapStateToProps)(AdminSider)