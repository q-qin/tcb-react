import React, { Component } from 'react'
import SettingItem from './SettingItem'
import { ImageCheckbox, ImageCheckboxGroup } from '@/components/Checkbox/ImgCheckbox'
import { ColorCheckbox, ColorCheckboxGroup } from '@/components/Checkbox/ColorCheckbox'
import { List, Switch, Divider } from 'antd'
import { connect } from 'react-redux'
import { setTheme, setThemeColor } from '@/store/actions'
import { ADMIN } from '@/config/default/admin'

class Setting extends Component {
  render () {
    const { theme, setTheme, themeColor, setThemeColor } = this.props
    let colorGroup = []
    ADMIN.palettes.forEach((v, i) => {
      colorGroup.push(
        <ColorCheckbox
          key={i}
          title={v}
          value={v}
        />
      )
    })
    return (
      <div>
        <SettingItem title="整体风格设置">
          <ImageCheckboxGroup defaultValue={theme} change={setTheme}>
            <ImageCheckbox
              title="暗色菜单"
              img="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg"
              value="dark"
            />
            <ImageCheckbox
              title="浅色菜单"
              img="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg"
              value="light"
            />
            <ImageCheckbox
              title="深色菜单"
              img="https://gw.alipayobjects.com/zos/antfincdn/hmKaLQvmY2/LCkqqYNmvBEbokSDscrm.svg"
              value="night"
            />
          </ImageCheckboxGroup>
        </SettingItem>
        <Divider />
        <SettingItem title="主题色设置">
          <ColorCheckboxGroup defaultValue={themeColor} change={setThemeColor}>
            {colorGroup}
          </ColorCheckboxGroup>
        </SettingItem>
        <Divider />
        <SettingItem>
          <List split={false}>
            <List.Item>
              <span>固定侧边栏</span>
              <Switch
                size="small"
              />
            </List.Item>
          </List>
        </SettingItem>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme,
  themeColor: state.themeColor
})
const mapDispatchToProps = (dispatch) => ({
  setTheme: (val) => dispatch(setTheme(val)),
  setThemeColor: (val) => dispatch(setThemeColor(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(Setting)