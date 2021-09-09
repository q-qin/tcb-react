import React, { Component } from 'react'
import { Drawer } from 'antd'
import { connect } from 'react-redux'
import { setSetting } from '@/store/actions'
import Setting from './Setting'

class AdminSetting extends Component {
  render () {
    const { setting, toggle } = this.props
    return (
      <Drawer
        width={300}
        placement="right"
        visible={setting}
        onClose={toggle}
      >
        <Setting />
      </Drawer>
    )
  }
}

const mapStateToProps = (state) => ({
  setting: state.setting
})
const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(setSetting())
})
export default connect(mapStateToProps, mapDispatchToProps)(AdminSetting)