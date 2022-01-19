let path = require('path')
const resolve = (pathname = '') => {
  return path.join(__dirname, './', pathname)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/css/base.scss";`,
        additionalData: `@import "~@/assets/css/base.scss";`
      },
    }
  },
  configureWebpack: config => {
    config.resolve.alias = {...config.resolve.alias, '@views': resolve('src/views'), '@src': resolve('src')}
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
}
