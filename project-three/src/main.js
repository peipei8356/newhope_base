import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'normalize.css'

export const main = new Vue({
  el: '#app',
  components: {App},
  router,
  store,
  template: '<App/>'
})
