const fs = require('fs') // 引入fs模块

function cleanDirs (path) {
  var files = []
  if (fs.existsSync(path)) { // 是否存在此路劲
    files = fs.readdirSync(path) // 遍历读取
    files.forEach(function (file) {
      var curPath = path + '/' + file
      if (fs.statSync(curPath).isDirectory()) { // 异步获取文件并判断文件类型
        cleanDirs(curPath) // 递归删除子文件
      } else { // 删除文件
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}

module.exports = cleanDirs
