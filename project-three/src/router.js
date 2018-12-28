import vue from 'vue'
import Router from 'vue-router'

vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'index',
      path: '/index',
      redirect: '/',
      component: resolve => require(['./pages/index.vue'], resolve)
    },
    {
      name: 'login',
      path: '/login',
      component: resolve => require(['./pages/login.vue'], resolve)
    },
    {
      name: 'help',
      path: '/help',
      component: resolve => require(['./pages/help.vue'], resolve)
    },
    {
      name: 'helpDetails',
      path: '/helpDetails',
      component: resolve => require(['./pages/helpDetails.vue'], resolve)
    },
    {
      name: 'helpMaintain',
      path: '/helpMaintain',
      component: resolve => require(['./pages/helpMaintain.vue'], resolve)
    }
  ]
})

export default router
