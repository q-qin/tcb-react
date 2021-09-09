import React, { Component } from 'react'
import { Tooltip } from 'antd'
import style from './index.module.less'
import {
  CheckOutlined
} from '@ant-design/icons'

const { Provider, Consumer } = React.createContext('')

class ColorCheckbox extends Component {
  render () {
    const { title, value } = this.props
    return (
      <Consumer>
        {
          ({ checkedValue, change }) =>
          <Tooltip title={title}>
            <div
              className={style['color-check-box']}
              style={{backgroundColor: value}}
              onClick={() => change(value)}
            >
              {checkedValue === value ? <CheckOutlined /> : null}
            </div>
          </Tooltip>
        }
      </Consumer>
    )
  }
}

class ColorCheckboxGroup extends Component {
  constructor(props) {
    super(props)
    const { defaultValue, change } = props

    // 修改主题色
    this.change = (val) => {
      if (val === this.state.checkedValue) return
      this.setState({
        checkedValue: val
      })
      // 修改redux中的defaultValue
      change(val)
    }

    this.state = {
      checkedValue: defaultValue || '',
      change: this.change
    }
    
  }
  
  render () {
    return (
      <Provider value={this.state}>
        <div className="flex">{this.props.children}</div>
      </Provider>
    )
  }
}
export {ColorCheckbox, ColorCheckboxGroup}