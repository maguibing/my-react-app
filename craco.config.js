const path = require('path')
const { whenProd, getPlugin, pluginByName } = require('@craco/craco')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')


module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    plugins: {
      add: [new AntdDayjsWebpackPlugin()]
    },
    configure: (webpackConfig) => {
        // 修改webpack配置
        whenProd(() => {
          webpackConfig.externals = {
            react: "React",
            "react-dom": "ReactDOM",
            redux: "Redux",
          }
          const { isFound, match } = getPlugin(
            webpackConfig,
            pluginByName("HtmlWebpackPlugin")
          )
          if (isFound) {
            match.userOptions.cdn = {
              js: [
                "https://cdn.bootcdn.net/ajax/libs/react/18.1.0/umd/react.production.min.js",
                "https://cdn.bootcdn.net/ajax/libs/react-dom/18.1.0/umd/react-dom.production.min.js",
                "https://cdn.bootcdn.net/ajax/libs/redux/4.2.0/redux.min.js",
              ],
            }
          }
        })
  
        return webpackConfig
      },
  }
}