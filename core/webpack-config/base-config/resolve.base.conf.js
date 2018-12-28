var dirVars = require('../config/dir_vars.conf')

module.exports = {
  extensions: ['.js', '.tsx', '.vue', '.json'],
  alias: {
    'vue$': 'vue/dist/vue.common.js',
    'core': dirVars.coreDir,
    'publicComponent': dirVars.componentsDir // 核心基础组件
  }
}
