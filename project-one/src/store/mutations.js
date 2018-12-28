import * as types from './mutation-types'

const mutations = {
  [types.SET_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  },
  [types.SET_USER_TOKEN] (state, token) {
    state.token = token
  },
  [types.SET_OPEN_ID] (state, openId) {
    state.openId = openId
  },
  [types.SET_BACK_URL] (state, backUrl) {
    state.backUrl = backUrl
  }
}

export default mutations
