'use strict'
const glob = require('glob')
const path = require('path')
const config = require('../env/index')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const packageConfig = require('../../../package.json')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', {indentedSyntax: true}),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') {
      return
    }

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

// 新增一个方法处理入口文件（单页应用的入口都是写死，到时候替换成这个方法）
exports.createEntry = (pagePath) => {
  let files = glob.sync(pagePath + '/**/*.js')
  let basename
  let foldername
  let entries = {}

  files.forEach(entry => {
    // Filter the s.js
    basename = path.basename(entry, path.extname(entry), 'router.js')
    foldername = path.dirname(entry).split('/').splice(-1)[0]
    // If foldername not equal basename, doing nothing
    // The folder maybe contain more js files, but only the same name is main

    if (basename === foldername) {
      entries[basename] =
        ['webpack-hot-middleware/client?noInfo=true&reload=true&path=/__webpack_hmr&timeout=20000', entry]
    }
  })
  return entries
}

// 获取多级的入口文件
exports.getMultiEntry = function (globPath, pathDir) {
  let files = glob.sync(globPath)
  let entries = {},
    entry, dirname, basename, pathname, extname

  for (let i = 0; i < files.length; i++) {
    entry = files[i]
    dirname = path.dirname(entry) // 所有父级路径名 例：src/src/index
    extname = path.extname(entry) // 后缀名 例： .js
    basename = path.basename(entry, extname) // 文件名，第二个参数不传的时候含后缀名 例： index.js
    // pathname = path.join(dirname, basename)
    pathname = dirname + '/' + basename // 不用join，防转义
    pathname = pathDir ? pathname.replace(new RegExp('^' + pathDir), '') : pathname
    entries[pathname] = './' + entry
  }
  return entries
}

// 新增出口文件
exports.createHtmlWebpackPlugin = (pagePath) => {
  let files = glob.sync(pagePath + '/**/*.html', {matchBase: true})
  let entries = exports.createEntry()
  let plugins = []
  let conf
  let basename
  let foldername
  files.forEach(file => {
    basename = path.basename(file, path.extname(file))
    foldername = path.dirname(file).split('/').splice(-1).join('')

    if (basename === foldername) {
      conf = {
        template: file,
        filename: basename + '.html',
        inject: true,
        chunks: entries[basename] ? [basename] : []
      }
      if (process.env.NODE_ENV !== 'development') {
        conf.chunksSortMode = 'dependency'
        conf.minify = {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        }
      }
      plugins.push(
        new HtmlWebpackPlugin(conf))
    }
  })

  return plugins
}
// end
