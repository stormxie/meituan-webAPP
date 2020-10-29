const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      }
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('styles', path.join(__dirname, './src/assets/styles'))
      .set('common', path.join(__dirname, './src/common'))
      .set('imges', path.join(__dirname, './public/imges'))
  }
}