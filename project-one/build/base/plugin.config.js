const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AutoDllPlugin = require('autodll-webpack-plugin')
const dirVars = require('./dir_vars.config')
// /build/webpack.base.conf.js
const HappyPack = require('happypack')
const os = require('os')
const HappyThreadPool = HappyPack.ThreadPool({size: os.cpus().length})

var plugins = []

plugins.push(
  new HtmlWebpackPlugin({
    template: path.resolve(dirVars.proSrcDir, `index.html`),
    filename: `index.html`,
    inject: true
  })
)

plugins.push(new AutoDllPlugin({
  inject: true,
  filename: '[name].dll.js',
  path: './js',
  entry: {
    vue: [
      'vue',
      'vue-router',
      'vuex'
    ]
  }
}))

plugins.push(new CopyWebpackPlugin([{
  from: path.resolve(dirVars.proSrcDir, './static'),
  to: 'static',
  ignore: ['.*']
}]))

// 增加HappyPack插件
plugins.push(new HappyPack({
  id: 'happy-babel-js',
  loaders: ['babel-loader?cacheDirectory=true'],
  threadPool: HappyThreadPool
}))
module.exports = plugins
