# modular packaging

> 基于vue-cli扩展，实现分模块打包

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
 "dev-pro-one": "webpack-dev-server --config project-one/build/webpack.dev.conf.js --process --colors"
 "dev-pro-two": "webpack-dev-server --config project-two/build/webpack.dev.conf.js --process --colors"

# build for production with minification
 "build-pro-one": "webpack --config project-one/build/webpack.prod.conf.js --process --colors"
 "build-pro-two": "webpack --config project-two/build/webpack.prod.conf.js --process --colors"

```

## 目录说明

``` bash

core 核心目录
  > components 公用组件
    >> base 公用基础组件
    >> business 公用业务组件
  > webpack-config 通用基础webpack配置文件
  > config 通用配置文件
  > dll 打包出的公用库

project-one
  > build 针对该项目的webpack配置文件（合并core中webpack-config文件）
    >> base-config 基础配置
      >>> dir_vars.conf.js    目录管理文件
      >>> entry.conf.js       entry配置文件(单页||多页)
      >>> output.conf.js      output配置文件
      >>> alias.conf.js       alias配置文件
      >>> plugins.conf.js     plugins配置文件
      >>> modules.conf.js     loaders配置文件
    >> webpack.dev.conf.js    开发环境运行脚本文件
    >> webpack.prod.conf.js   生产环境打包脚本文件
  > src 文件项目目录
    >> common 项目公共文件
      >>> imgs
      >>> js
      >>> css
    >>> 自定义
  > dist 打包文件
  > package.json 该项目的依赖文件
  > README.md 项目描述文件(必须)

project-*
    > build 针对该项目的webpack配置文件
    > src 文件项目目录
    > dist 打包文件
    > package.json 该项目的依赖文件
    > README.md 当前项目的描述文件
.eslintrc.js    eslint配置文件
.babelrc        babel配置文件
node_modules    全局项目依赖包
package.json    全局项目依赖

```
