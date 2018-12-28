const path = require('path')
const dirVars = require('./dir_vars.config')
const utils = require('../../../core/webpack-config/config/utils')
const config = require('../../../core/webpack-config/env')

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [dirVars.proSrcDir, resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = [
  ...(config.dev.useEslint ? [createLintingRule()] : []),
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    exclude: [dirVars.proNodeModulesDir],
    include: [dirVars.proSrcDir]
  },
  {
    test: /\.css$/,
    use: [
      'vue-style-loader',
      'css-loader'
    ]
  },
  {
    test: /\.styl(us)?$/,
    use: [
      'vue-style-loader',
      'css-loader',
      'stylus-loader'
    ]
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: [dirVars.proNodeModulesDir],
    include: [dirVars.proDir, path.join(dirVars.proNodeModulesDir, '/webpack-dev-server/client')]
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    include: [dirVars.proSrcDir],
    options: {
      limit: 10000,
      name: utils.assetsPath('img/[name].[hash:7].[ext]')
    }
  },
  {
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    loader: 'url-loader',
    include: [dirVars.proSrcDir],
    options: {
      limit: 10000,
      name: utils.assetsPath('media/[name].[hash:7].[ext]')
    }
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    include: [dirVars.proSrcDir],
    options: {
      limit: 10000,
      name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
    }
  }
]
