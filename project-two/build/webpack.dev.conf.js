const baseConfig = require('../../core/webpack-config/_webpack.dev.conf')
const webpack = require('webpack')
const entryConf = require('./base_config/entry.conf')
const outputConf = require('./base_config/output.conf')
const modulesConf = require('./base_config/modules.conf')
const pluginsConf = require('./base_config/plugins.conf')
const aliasConf = require('./base_config/alias.conf')

var webpackConfig = Object.assign(baseConfig, {
  entry: entryConf,
  output: outputConf,
  // devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
    hot: true, //
    index: 'index.html' // 启动页热更新
  },
  plugins: pluginsConf
})

webpackConfig.resolve.alias = Object.assign(webpackConfig.resolve.alias, aliasConf)
webpackConfig.module.rules = webpackConfig.module.rules.concat(modulesConf)
// webpackConfig.plugins = webpackConfig.plugins.concat(pluginsConf)
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
// webpackConfig.plugins.push(new webpack.NamedModulesPlugin())
console.log(webpackConfig.resolve.alias)
module.exports = webpackConfig
