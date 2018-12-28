module.exports = {
  port: 8080, // 默认端口号8080
  open: true, // 打开主页
  hot: true, // 开启热模块更新
  proxy: {
    '/base-gateway': {
      target: 'http://basegw-qa.newhopegy.cn',
      secure: false,
      changeOrigin: true
    }
    // '/base-gateway': {
    //   target: 'http://rich-qa.hopewoo.cn',
    //   secure: false,
    //   changeOrigin: true,
    //   logLevel: true // 显示代理信息
    //   // headers 可以增加请求头
    // },
  }, // https
  overlay: true, // 打开错误提示
  historyApiFallback: true
}
