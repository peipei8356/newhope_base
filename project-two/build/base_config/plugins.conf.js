const HtmlWebpackPlugin = require('html-webpack-plugin')
const dirVars = require('./dir_vars.config')
const path = require('path')

var plugins = []
var VueLoaderPlugin = require('vue-loader/lib/plugin')

plugins.push(new HtmlWebpackPlugin({
  template: path.join(dirVars.proSrcDir, '/index.html'),
  filename: 'index.html',
  inject: true
}))

plugins.push(new VueLoaderPlugin())

module.exports = plugins
