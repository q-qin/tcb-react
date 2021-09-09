import { 
  COUNT,
  THEME,
  SETTING,
  THEMECOLOR
} from './types'

// 设置数量
const setCount = (value) => ({
  type: COUNT,
  value
})

// 设置切换抽屉开关
const setSetting = () => ({
  type: SETTING
})

// 切换主题风格
const setTheme = (value) => ({
  type: THEME,
  value 
})

// 切换主题颜色
const setThemeColor = (value) => ({
  type: THEMECOLOR,
  value
})

export { 
  setCount,
  setTheme,
  setSetting,
  setThemeColor
}