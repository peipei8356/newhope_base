const webpack = require('webpack')
var pluginsConfig = require('./base-config/plugins.base.con')

module.exports = {
  mode: 'development',
  resolve: require('./base-config/resolve.base.conf'),
  module: require('./base-config/modules.base.conf'),
  plugins: pluginsConfig.concat([
    new webpack.DefinePlugin({
      'process.env': require('./env/dev.env')
    })
  ])
}
