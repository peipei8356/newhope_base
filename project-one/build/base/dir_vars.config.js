var path = require('path')
var dirVars = require('../../../core/webpack-config/config/dir_vars.conf')

/* project-one */
dirVars.proDir = path.resolve(dirVars.staticRootDir, './project-one')

/* src */
dirVars.proSrcDir = path.resolve(dirVars.proDir, './src')

/* dist */
dirVars.proDistDir = path.resolve(dirVars.proDir, './dist')

/* build */
dirVars.proBuildDir = path.resolve(dirVars.proDir, './build')

/* node-modules */
dirVars.proNodeModulesDir = path.resolve(dirVars.proDir, './node_modules')

/* dirVars.staticDir */
dirVars.proStaticDir = path.resolve(dirVars.proSrcDir, './static')

/* dirVars.proAssetsDir */
dirVars.proAssetsDir = path.resolve(dirVars.proSrcDir, './assets')

/* base */
dirVars.proBaseDir = path.resolve(dirVars.proSrcDir, './base')

/* components */
dirVars.proComponentsDir = path.resolve(dirVars.proSrcDir, './components')

/* src */
dirVars.proPagesDir = path.resolve(dirVars.proSrcDir, './src')

/* router */
dirVars.proRoutesDir = path.resolve(dirVars.proSrcDir, './router')

/* common */
dirVars.proCommonDir = path.resolve(dirVars.proSrcDir, './common')

module.exports = dirVars
