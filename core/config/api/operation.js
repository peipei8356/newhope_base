import http from '../../js/http/fetch'

// 消息中心
export async function queryQuestion (params) {
  return http.post('operation-questionInfoMgm', params, 'queryQuestion')
}

//
export async function queryQstType (params) {
  return http.post('operation-questionTypeMgm', params, 'queryQstType')
}
