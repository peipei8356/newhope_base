const baseConfig = require('../../core/webpack-config/_webpack.prod.conf')
const plugins = require('./base/plugin.config')
const modulesConfig = require('./base/module.config')
const aliasConfig = require('./base/alias.config')
const dirVars = require('./base/dir_vars.config')
const entries = require('./base/entry.config')
const cleanDirs = require('../../core/common/js/clean_dirs')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

cleanDirs(dirVars.proDistDir) // 打包之前先清理dist目录

var webpackConfig = Object.assign(baseConfig, {
  entry: entries,
  output: {
    path: dirVars.proDistDir,
    filename: 'js/[name].[chunkhash].js',
    publicPath: './',
    chunkFilename: 'js/[id].[chunkhash].js'
  }
})

webpackConfig.module.rules = webpackConfig.module.rules.concat(modulesConfig)
webpackConfig.resolve.alias = Object.assign(webpackConfig.resolve.alias, aliasConfig)
webpackConfig.plugins = webpackConfig.plugins.concat(plugins)
webpackConfig.plugins.push(new VueLoaderPlugin())

module.exports = webpackConfig
