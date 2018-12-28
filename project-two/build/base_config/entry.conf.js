const path = require('path')
const dirVars = require('./dir_vars.config')

module.exports = {
  index: path.join(dirVars.proSrcDir, '/main.js')
}
