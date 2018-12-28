const dirVars = require('./dir_vars.config')
const path = require('path')

module.exports = {
  path: path.join(dirVars.proDir, '/dist'),
  filename: '[name].js',
  publicPath: '/'
}
