const dirVars = require('../config/dir_vars.conf')
const config = require('../env')

module.exports = {
  rules: [
    {
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [dirVars.componentsDir],
      options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: !config.dev.showEslintErrorsInOverlay
      }
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      include: dirVars.componentsDir
    },
    {
      test: /\.js$/,
      // loader: 'babel-loader',
      loader: 'happypack/loader?id=babel',
      include: dirVars.coreDir
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'static/[name]_[hash:5].[ext]'
      },
      include: dirVars.coreDir
    },
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader',
      include: dirVars.coreDir
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      include: dirVars.coreDir
    }
  ]
}
