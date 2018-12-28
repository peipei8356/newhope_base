// var path = require('path')
var dirVars = require('./base/dir_vars.config')
var webpack = require('webpack')
var baseConfig = require('../../core/webpack-config/_webpack.dev.conf')
var entries = require('./base/entry.config')
var modulesConfig = require('./base/module.config')
var aliasConfig = require('./base/alias.config')
var plugins = require('./base/plugin.config')

var {VueLoaderPlugin} = require('vue-loader')

var webpackConfig = Object.assign(baseConfig, {
  entry: entries,
  output: {
    path: dirVars.proDistDir,
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  devServer: {
    open: true,
    hot: true,
    proxy: {
      '/base-gateway': {
        target: 'http://rich-qa.hopewoo.cn',
        secure: false,
        changeOrigin: true
      }
    }
  }
})

webpackConfig.module.rules = webpackConfig.module.rules.concat(modulesConfig)
webpackConfig.resolve.alias = Object.assign(webpackConfig.resolve.alias, aliasConfig)
webpackConfig.plugins = webpackConfig.plugins.concat(plugins)
webpackConfig.plugins.push(new VueLoaderPlugin())
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())

module.exports = webpackConfig
