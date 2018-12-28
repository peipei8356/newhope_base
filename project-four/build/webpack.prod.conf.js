const baseConfig = require('../../core/webpack-config/_webpack.prod.conf')
const entryConf = require('./base_config/entry.conf')
const outputConf = require('./base_config/output.conf')
const modulesConf = require('./base_config/modules.conf')
const pluginsConf = require('./base_config/plugins.conf')
const aliasConf = require('./base_config/alias.conf')

var webpackConfig = Object.assign(baseConfig, {
  entry: entryConf,
  output: outputConf
})

webpackConfig.resolve.alias = Object.assign(webpackConfig.resolve.alias, aliasConf)
webpackConfig.module.rules = webpackConfig.module.rules.concat(modulesConf)
webpackConfig.plugins = webpackConfig.plugins.concat(pluginsConf)

module.exports = webpackConfig
