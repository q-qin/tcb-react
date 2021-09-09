const CracoLessPlugin = require('craco-less');
// const { getThemeVariables } = require('antd/dist/theme')
const path = require('path')
const localIdentName = '[local]-[hash:base64:5]';
const createThemeColorReplacerPlugin = require('./src/config/themeConfig')
const { modifyVars } = require('./src/utils/themeUtil')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
    },
    plugins: [createThemeColorReplacerPlugin()]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // ...getThemeVariables({
              //   // dark: true,  // 开启暗黑模式
              //   // compact: true,  // 开启紧凑模式
              // }),
              ...modifyVars()
            },
            javascriptEnabled: true,
          },
        },
        modifyLessRule(lessRule, context) {
          return {
            ...lessRule,
            ...{
              test: /\.less$/,
              exclude: /\.module\.less$/,
            }
          }
        }
      }
    },
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName
          }
        },
        modifyLessRule(lessRule, context) {
          return {
            ...lessRule,
            ...{
              test: /\.module\.less$/,
              exclude: /node_modules/
            }
          }
        }
      }
    }
  ],
};