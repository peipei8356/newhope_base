'use strict'
import { wechatJssdk } from './api/base'
import { lazyLoadJs } from './utils'
import { RESP_CODE } from './http/config'

/* eslint-disable */
export default async function init () {
  await lazyLoadJs('//res.wx.qq.com/open/js/jweixin-1.2.0.js')
  let params = {
    url: window.location.href.split('#')[0]
  }
  let res = await wechatJssdk(params)
  if (res.retCode === RESP_CODE.SUCCESS) {
    let conf = res.jsonBody
    let config = {
      debug: process.env.NODE_ENV !== 'production', // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      jsApiList: ['chooseImage', 'previewImage', 'uploadImage', 'getLocalImgData', 'hideAllNonBaseMenuItem'] // 必填，需要使用的JS接口列表
    }
    Object.assign(config, conf)
    wx.config(config)
  }
  
  wx.ready(() => {
    wx.hideAllNonBaseMenuItem()
  })
}
