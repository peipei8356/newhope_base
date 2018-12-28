import http from '../../js/http/fetch'

/* 创建图形验证码 */
export async function queryContractList (params) {
  return http.post('loan-queryContractList', params)
}
