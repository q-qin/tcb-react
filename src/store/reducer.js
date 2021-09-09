import { changeThemeColor } from '@/utils/themeUtil'
import { message } from 'antd'
import { 
  COUNT,
  THEME,
  SETTING,
  THEMECOLOR
} from './types'

const reducer = (state, action) => {
  switch (action.type) {
    case COUNT:
      const count = action.value;
      return {...state, ...{ count }}
    case THEME: 
      const theme = action.value
      // 修改系统主题
      changeThemeColor(state.themeColor, theme).then(message.info('修改了主题，正在切换'))
      return {...state, ...{ theme }}
    case SETTING:
      const setting = !state.setting
      return {...state, ...{ setting }}
    case THEMECOLOR:
      const themeColor = action.value
      // 修改系统主题色
      changeThemeColor(themeColor, state.theme).then(message.info('修改了主题色，正在切换'))
      return {...state, ...{ themeColor }}
    default:
      return state;
  }
};
export default reducer