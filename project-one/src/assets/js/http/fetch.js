/**
 * HTTP数据通信模块
 */
import 'whatwg-fetch'
import fetch from 'isomorphic-fetch'
import URLSearchParams from 'url-search-params'
import Toast from '../../../components/base/toast'
import { APP_ID, RESP_CODE } from './config'

/**
 * 序列化参数 (get)
 * @param obj
 * @returns {string}
 */
function serialiseObject (obj) {
  const prefix = '?'

  if (obj && Object.keys(obj).length) {
    return prefix + Object.keys(obj).map(key =>
      `${key}=${encodeURIComponent(obj[key])}`
    ).join('&')
  }
  return ''
}

/**
 * 获取参数 (post)
 * @param {any} payload
 * @returns
 */
function getParams (payload) {
  let datas = new URLSearchParams()
  for (const prop in payload) {
    let val = typeof payload[prop] === 'object'
      ? JSON.stringify(payload[prop])
      : payload[prop]
    datas.set(prop, val)
  }
  // console.log(datas.toString())
  return datas
}

/**
 * 检查状态码
 * @param response
 * @returns {*}
 */
function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

/**
 * 格式化response
 * @param response
 * @returns {*}
 */
function parseJSON (response) {
  if (response.ok) {
    return response[response.status === 204 ? 'text' : 'json']()
  }
}

/**
 * 请求主体
 * @param option
 * @param url
 * @returns {Promise<void>}
 * @private
 */
async function _fetch (option = {}, url = '/base-gateway') {
  return new Promise(async (resolve, reject) => {
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Accept': 'application/json'
      },
      timeout: 5000
    }
    Object.assign(options, option)
    try {
      let request = await fetch(url, options)
      let checked = await checkStatus(request)
      let res = await parseJSON(checked)
      if (res && res.retCode) {
        switch (res.retCode) {
          case RESP_CODE.BASE: // 合并处理以下二种情况
          case RESP_CODE.TIMEOUT:
            Toast(res.retDesc)
            break
          case RESP_CODE.ERROR:
            Toast('未知原因，请联系客服')
            break
          case RESP_CODE.USER_ERROR:
            // todo 判断是否登录
            break
          // case RESP_CODE.SUCCESS:
          //   resolve(res.jsonBody)
          //   break
          default:
            resolve(res)
            break
        }
      } else {
        reject(res)
      }
    } catch (error) {
      throw new Error(error)
    }
  })
}

const http = {
  /**
   * get 请求方式
   * @param path
   * @param params
   * @returns {Promise<void>}
   */
  async get (path, params) {
    let url = `${path}${serialiseObject(params)}`
    return _fetch(url)
  },

  /**
   * post请求方式
   * @param apiName
   * @param payload
   * @param method
   * @returns {Promise<void>}
   */
  async post (apiName, payload = {}, method = 'handle') {
    let params = {
      api: apiName,
      appId: APP_ID.WX,
      method: method,
      params: payload,
      version: '1.0.0'
    }
    if (localStorage.token) {
      params.token = localStorage.token
    }
    let options = {
      method: 'POST',
      body: getParams(params)
    }
    return _fetch(options)
  }
}

export default http
