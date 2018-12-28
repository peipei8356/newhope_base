const HtmlWebpackPlugin = require('html-webpack-plugin')
const dirVars = require('./dir_vars.config')
const path = require('path')

var plugins = []
plugins.push(new HtmlWebpackPlugin({
  template: path.join(dirVars.proSrcDir, '/index.html'),
  filename: 'index.html',
  inject: true
}))

module.exports = plugins
