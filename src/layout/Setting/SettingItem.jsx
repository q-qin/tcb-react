import React, { Component } from 'react'
import style from './index.module.less'

class SettingItem extends Component {
  render () {
    let title = null
    if (this.props.title) {
      title = (<h3 className="title">{this.props.title}</h3>)
    }
    return (
      <div className={style['setting-item']}>
        { title }
        { this.props.children }
      </div>
    )
  }
}

export default SettingItem