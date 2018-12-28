import http from '../http/fetch'

// 消息中心
export async function queryQuestion (params) {
  return http.post('operation-questionInfoMgm', params, 'queryQuestion')
}

//
export async function queryQstType (params) {
  return http.post('operation-questionTypeMgm', params, 'queryQstType')
}

// 查询合同（临时测试用）
export async function queryContractList (params) {
  return http.post('operation-queryContractList', params)
}
