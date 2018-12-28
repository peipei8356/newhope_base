import http from '../http/fetch'

/* 创建图形验证码 */
export async function createImgCode (params) {
  return http.post('member-createImgCode', params)
}

/* 校验图形验证码 */
export async function checkImgCode (params) {
  return http.post('member-checkImgCode', params)
}

/* 获取授权openId */
export async function getWeChatOpenId (params) {
  return http.post('member-getWeChatOpenId', params)
}

/* 登录 */
export async function login (params) {
  return http.post('member-login', params, 'memberLogin')
}

/* 静默登录 */
export async function silentLogin (params) {
  return http.post('member-weChatSilentLogin', params)
}

/* 获取用户信息 */
export async function queryMemberDetail (params) {
  return http.post('member-queryMemberDetail', params)
}

/* 获取企业认证信息 */
export async function queryCompanyAuthInfo (params) {
  return http.post('member-authCompany', params, 'queryCompanyAuthInfo')
}

/* 提交企业认证信息 */
export async function authCompany (params) {
  return http.post('member-authCompany', params, 'authCompany')
}

/* 判断用户是否已是会员 */
export async function isMember (params) {
  return http.post('member-checkMember', params, 'checkPerson')
}

/* 获取短信验证码 */
export async function getSecurityCode (params) {
  return http.post('member-senderSecurityCode', params)
}

/* 个人验证短信验证码是否正确 */
export async function createPersonMember (params, type) {
  return http.post('member-createPersonMember', params, type)
}

/* 企业验证短信验证码是否正确 */
export async function createCompanyMember (params, type) {
  return http.post('member-createCompanyMember', params, type)
}

/* 设置密码，修改密码，忘记密码接口 */
export async function setMemberPwd (params) {
  return http.post('member-setMemberPwd', params)
}

/* 校验会员密码 */
export async function checkMemberPwd (params) {
  return http.post('member-checkMemberPwd', params)
}

/* 校验是否为会员 */
export async function queryMemberExist (params) {
  return http.post('member-queryMemberExist', params)
}

/* 忘记密码处校验验证码是否正确 */
export async function checkSecurityCode (params) {
  return http.post('member-checkSecurityCode', params)
}

/* 查询用户的openID是否有绑定关系 */
export async function getWeChatBind (params) {
  return http.post('member-getWeChatBind', params)
}

/* 用户注册成功后绑定openID登录 */
export async function bindOrUnBindWeChat (params, type) {
  return http.post('member-bindOrUnBindWeChat', params, type)
}

/* 校验用户信息 */
export async function checkMemberInfo (params) {
  return http.post('member-checkMemberInfo', params)
}

/* 身份证认证 */
export async function authIdentity (params) {
  return http.post('member-authIdentity', params, 'idCardOCR')
}

/* 会员退出 */
export async function memberLogout(params) {
  return http.post('member-logout', params)
}
