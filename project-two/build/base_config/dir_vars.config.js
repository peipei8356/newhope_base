const path = require('path')
const mE = require('../../../core/webpack-config/config/dir_vars.conf')

mE.proDir = path.resolve(mE.staticRootDir, './project-two')
mE.proNodeModulesDir = path.resolve(mE.proDir, './node_modules')
mE.proBuildDir = path.resolve(mE.proDir, './build')
mE.proDistDir = path.resolve(mE.proDir, './dist')
mE.proSrcDir = path.resolve(mE.proDir, './src')

module.exports = mE
