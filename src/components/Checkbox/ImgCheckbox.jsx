import React, { Component } from 'react'
import { Tooltip } from 'antd'
import style from './index.module.less'
import {
  CheckOutlined
} from '@ant-design/icons'


const { Provider, Consumer } = React.createContext('')

class ImageCheckbox extends Component {
  render () {
    const { title, img, value } = this.props
    const check = 
      <div className={style['check-item']}>
        <CheckOutlined />
      </div>

    return (
      <Consumer>
        {
          ({ checkedValue, change }) => 
          <Tooltip title={title}>
            <div className={style['img-check-box']} onClick={() => change(value)}>
              <img src={img} alt={title} />
              {checkedValue === value ? check : null}
            </div>
          </Tooltip>
        }
      </Consumer>
    )
  }
}

class ImageCheckboxGroup extends Component {
  constructor(props) {
    super(props)
    const { defaultValue, change } = props

    // 修改整体风格参数
    this.change = (val) => {
      if (val === this.state.checkedValue) return 
      this.setState({
        checkedValue: val
      })
      // 修改redux的储存值
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

export { ImageCheckboxGroup, ImageCheckbox } 