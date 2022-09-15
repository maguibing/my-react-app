const path = require('path')
// const { whenProd, getPlugin, pluginByName } = require('@craco/craco')


module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    
  }
}