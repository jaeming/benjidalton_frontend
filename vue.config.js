module.exports = {
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .oneOf('vue').resourceQuery(/^\?vue/)
      .use('pug-plain-loader').loader('pug-plain-loader').end().end()
      .oneOf('pug').use('raw-loader').loader('raw-loader').end()
      .use('pug-plain-loader').loader('pug-plain-loader')
  }
}
