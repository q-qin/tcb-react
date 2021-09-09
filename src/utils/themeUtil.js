const client = require('webpack-theme-color-replacer/client')
const varyColor = client.varyColor
const { generate } = require('@ant-design/colors')
const { themeMode } = require('../config/default/admin')
const { ANTD } = require('../config/default/antd')
const { theme } = require('../config/default/setting')

// 获取主题色
function getThemeColors (color, $theme) {
  const _color = color || theme.color
  const mode = $theme || theme.mode
  const replaceColors = getThemeToggleColors(_color, mode)
  const themeColors = [
    ...replaceColors.mainColors,
    ...replaceColors.subColors,
    ...replaceColors.menuColors,
    ...replaceColors.contentColors,
    ...replaceColors.rgbColors,
    ...replaceColors.functionalColors.success,
    ...replaceColors.functionalColors.warning,
    ...replaceColors.functionalColors.error
  ]
  return themeColors
}

// 修改主题色
function changeThemeColor (newColor, $theme) {
  return client.changer.changeColor({newColors: getThemeColors(newColor, $theme)})
}

// 获取主题变换色
function getThemeToggleColors (color, mode) {
  const mainColors = getAntdColors(color, mode)
  const primary = mainColors[5]
  const subColors = getAntdColors(primary, themeMode.LIGHT)
  const menuColors = getMenuColors(color, mode)
  const themeCfg = ANTD.theme[mode]
  let contentColors = Object.keys(themeCfg).map(k => themeCfg[k]).map(color => isHex(color) ? color : toNum3(color).join(','))
  contentColors = [...new Set(contentColors)]
  let rgbColors = [toNum3(primary).join(',')]
  let functionalColors = getFunctionalColors(mode)
  return {primary, mainColors, subColors, menuColors, contentColors, rgbColors, functionalColors}
}

// 获取阿里色系
function getAntdColors (color, mode) {
  const options = mode && (mode === themeMode.NIGHT) ? {theme: 'dark'} : undefined
  return generate(color, options)
}

// menuColors
function getMenuColors (color, mode) {
  if (mode === themeMode.NIGHT) {
    return ANTD.primary.night.menuColors
  }
  if (color.toLowerCase() === ANTD.primary.color.toLowerCase()) {
    return ANTD.primary.dark.menuColors
  }
  return [varyColor.darken(color, 0.93), varyColor.darken(color, 0.83), varyColor.darken(color, 0.73)]
  // return ['#253460', '#253461', '#253462']
}

// functionalColors
function getFunctionalColors (mode) {
  let options = mode && (mode === themeMode.NIGHT) ? {theme: 'dark'} : undefined
  let { success, error, warning } = ANTD.primary
  const { success: s1, warning: w1, error: e1 } = theme
  success = success && s1
  warning = warning && w1
  error = error && e1
  const successColors = generate(success, options)
  const warningColors = generate(warning, options)
  const errorColors = generate(error, options)
  return {
    success: successColors,
    warning: warningColors,
    error: errorColors
  }
}

//  hex
function isHex(color) {
  return color.length >= 4 && color[0] === '#'
}

function isRgb(color) {
  return color.length >=10 && color.slice(0, 3) === 'rgb'
}

function isRgba(color) {
  return color.length >= 13 && color.slice(0, 4) === 'rgba'
}

function toNum3 (color) {
  if (isHex(color)) {
    return varyColor.toNum3(color)
  }
  let colorStr = ''
  if (isRgb(color)) {
    colorStr = color.slice(5, color.length)
  } else if (isRgba(color)) {
    colorStr = color.slice(6, color.lastIndexOf(','))
  }
  let rgb = colorStr.split(',')
  const r = parseInt(rgb[0])
  const g = parseInt(rgb[1])
  const b = parseInt(rgb[2])
  return [r, g, b]
}

// modifyVars
function modifyVars (color) {
  let _color = color || theme.color
  const palettes = getAntdColors(_color, theme.mode)
  // const menuColors = getMenuColors(_color, theme.mode)
  const { success, warning, error } = getFunctionalColors(theme.mode)
  const primary = palettes[5]
  return {
    'primary-color': primary,
    'primary-1': palettes[0],
    'primary-2': palettes[1],
    'primary-3': palettes[2],
    'primary-4': palettes[3],
    'primary-5': palettes[4],
    'primary-6': palettes[5],
    'primary-7': palettes[6],
    'primary-8': palettes[7],
    'primary-9': palettes[8],
    'primary-10': palettes[9],
    'info-color': primary,
    'success-color': success[5],
    'warning-color': warning[5],
    'error-color': error[5],
    'alert-info-bg-color': palettes[0],
    'alert-info-border-color': palettes[2],
    'alert-success-bg-color': success[0],
    'alert-success-border-color': success[2],
    'alert-warning-bg-color': warning[0],
    'alert-warning-border-color': warning[2],
    'alert-error-bg-color': error[0],
    'alert-error-border-color': error[2],
    'processing-color': primary,
    'btn-danger-bg': error[4],
    'btn-danger-border': error[4]
    // 'layout-header-background': '#fff',
    // 'layout-header-background': menuColors[1],
    // 'layout-trigger-background': menuColors[2],
    // 'menu-dark-submenu-bg': menuColors[0],
    // 'menu-dark-item-active-bg': 'transparent',
    // 'menu-item-active-bg': 'transparent',
    // 'menu-dark-color': 'rgba(254, 254, 254, 0.65)',
    // 'menu-dark-highlight-color': primary,
    // 'menu-dark-selected-item-text-color': primary,
    // 'menu-dark-selected-item-icon-color': primary,
    // 'border-radius-base': '4px',
    // 'layout-body-background': '#F9F9F9',
    // 'text-color': '#464646',
    // 'label-color': '#464646',
    // 'table-header-color': '#464646',
    // 'table-header-bg': '#ecf6ff',
    // ...ANTD.theme[theme.mode]
  }
}

// 获取localStorage
function getLocalTheme (loadTheme) {
  const localThemeStr = localStorage.getItem(process.env.VUE_APP_SETTING_KEY)
  const localTheme = JSON.parse(localThemeStr)
  if (loadTheme) {
    loadLocalTheme(localTheme)
  }
  return localTheme
}

// 加载localStorage
function loadLocalTheme (localTheme) {
  if (localTheme) {
    const { themeColor, sideTheme } = localTheme
    const color = themeColor || theme.color
    const mode = sideTheme || theme.mode
    changeThemeColor(color, mode)
  }
}

module.exports = {
  getThemeColors,
  changeThemeColor,
  modifyVars,
  getLocalTheme
}
