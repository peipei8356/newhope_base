var path = require('path')
var dirVars = {} // 存放目录总变量

// 源文件目录
dirVars.staticRootDir = path.join(__dirname, '../../../') // 根目录
/**/
/**/
dirVars.coreDir = path.resolve(dirVars.staticRootDir, './core') // 项目框架
/**/
/**/
dirVars.coreNodeModulesDir = path.resolve(dirVars.coreDir, './node_modules') // 核心目录的相关依赖
/**/
/**/
dirVars.commonDir = path.resolve(dirVars.coreDir, './common') // 公共资源
/**/
/**/
dirVars.dllDir = path.resolve(dirVars.coreDir, './dll') // 存放由各种不常改变的js/css打包而来的dll
/**/
/**/
dirVars.libsDir = path.resolve(dirVars.coreDir, './libs') // 与业务逻辑无关的第三方库 || 不能npm管理的第三方库
/**/
/**/
dirVars.coreConfigDir = path.resolve(dirVars.coreDir, './config') // 存放项目框架的各种配置文件||公共API
/**/
/**/
dirVars.componentsDir = path.resolve(dirVars.coreDir, './components') // 存放组件，可以是纯HTML，也可以包含js/css/image等，看自己需要

module.exports = dirVars
