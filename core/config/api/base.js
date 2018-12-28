import http from '../http/fetch'

export async function wechatJssdk (params) {
  return http.post('base-wechatJssdk', params)
}

export async function wechatDownload (params) {
  return http.post('base-wechatDownload', params)
}
