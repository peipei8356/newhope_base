const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const dirVars = require('./config/dir_vars.conf')
const deleteDir = require('../common/js/clean_dirs')

deleteDir(dirVars.dllDir) // 打包之前优先删除DLL目录

module.exports = {
  mode: 'production',
  entry: {
    dll: ['vue', 'vue-router', 'vuex']
  },
  output: {
    path: dirVars.dllDir,
    filename: 'vue.dll.js',
    library: 'dll'
  },
  optimization: {
    minimize: true
  },
  module: require('./base-config/modules.base.conf'),
  resolve: require('./base-config/resolve.base.conf'),
  plugins: [
    new webpack.DllPlugin({
      context: dirVars.staticRootDir,
      name: 'dll',
      path: path.join(dirVars.dllDir, 'vue-dll-mainfest.json')
    }),
    new ExtractTextPlugin({
      filename: '[name]_dll.css'
    })
  ]
}
