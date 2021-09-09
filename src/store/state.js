import { theme } from '@/config/default/setting'
const { color, mode } = theme

const state = {
  count: 1000,
  setting: false, // 设置开关
  theme: mode, // 主题风格
  themeColor: color // 主题颜色
}

export default state