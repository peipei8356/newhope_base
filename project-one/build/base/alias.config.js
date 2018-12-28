const dirVars = require('./dir_vars.config')

module.exports = {
  'vue$': 'vue/dist/vue.esm.js',
  '@': dirVars.proSrcDir,
  'src': dirVars.proSrcDir,
  'assets': dirVars.proAssetsDir,
  'components': dirVars.proComponentsDir,
  'static': dirVars.proStaticDir
}
