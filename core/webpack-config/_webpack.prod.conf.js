const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const pluginsConfig = require('./base-config/plugins.base.con')

module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true
      })
    ],
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: {
      name: entrypoint => `runtimechunk~${entrypoint.name}`
    }
  },
  resolve: require('./base-config/resolve.base.conf'),
  module: require('./base-config/modules.base.conf'),
  plugins: pluginsConfig.concat([
    new webpack.DefinePlugin({
      'process.env': require('./env/prod.env')
    }),
    new webpack.NoEmitOnErrorsPlugin() // 配合CLI的--bail，一出error就终止webpack的编译进程
  ])
}
