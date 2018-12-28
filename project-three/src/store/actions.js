import * as types from './mutation-types'
import { RESP_CODE } from '../assets/js/http/config'
import { getWeChatOpenId, queryMemberDetail } from '../assets/js/api/member'
import toast from '../components/base/toast'

const actions = {
  async getUserInfo ({commit}, params) {
    if (localStorage.userInfo) {
      commit(types.SET_USER_INFO, JSON.parse(localStorage.userInfo))
    } else {
      if (localStorage.token) {
        try {
          let res = await queryMemberDetail(params)
          if (res.retCode === RESP_CODE.SUCCESS) {
            localStorage.userInfo = JSON.stringify(res.jsonBody)
            commit(types.SET_USER_INFO, res.jsonBody)
          } else {
            toast(res.retDesc)
          }
        } catch (e) {
          throw e
        }
      } else {
        console.error('未登录')
      }
    }
  },
  async getOpenId ({commit}, code) {
    if (localStorage.openId) {
      commit(types.SET_OPEN_ID, localStorage.openId)
    } else {
      try {
        let res = await getWeChatOpenId(code)
        if (res.retCode === RESP_CODE.SUCCESS) {
          localStorage.openId = res.jsonBody.openid
          commit(types.SET_OPEN_ID, res.jsonBody.openid)
        } else {
          toast(res.retDesc)
        }
      } catch (e) {
        throw e
      }
    }
  },
  async setBackUrl ({commit}, backUrl) {
    if (backUrl) {
      sessionStorage.backUrl = backUrl
      commit(types.SET_BACK_URL, backUrl)
    } else {
      sessionStorage.removeItem('backUrl')
      commit(types.SET_BACK_URL, null)
    }
  }
}
export default actions
