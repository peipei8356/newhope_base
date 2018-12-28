const path = require('path')
const dirVars = require('./dir_vars.config.js')

module.exports = {
  app: path.resolve(dirVars.proSrcDir, './main.js')
}
