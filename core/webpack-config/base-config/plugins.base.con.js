// const webpack = require('webpack')
// const path = require('path')
const os = require('os')
const HappyPack = require('happypack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const dirVars = require('../config/dir_vars.conf')

var plugins = [
  new HappyPack({
    id: 'babel',
    loaders: ['babel-loader'],
    // 共享进程池
    threadPool: HappyPack.ThreadPool({size: os.cpus().length}),
    // 允许 HappyPack 输出日志
    verbose: true
  }),
  new ExtractTextPlugin('[name]/style.css')
  /*
   new webpack.DllReferencePlugin({
     context: dirVars.staticRootDir, // 指定一个路径作为上下文环境，需要与DllPlugin的context参数保持一致，建议统一设置为项目根目录
     manifest: path.join(dirVars.dllDir, './vue-dll-mainfest.json'), // 指定由DllPlugin暴露出来的DLL文件生成的manifest.json文件
     name: 'dll' // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
   })
   */
]

module.exports = plugins
