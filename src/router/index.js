import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: resolve =>require(['../views/Index.vue'],resolve)
  },
  {
    path: '/bangDingIphone',
    name: 'bangDingIphone',
    component: resolve =>require(['../views/page/bangDingIpone.vue'],resolve)
  }

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior (to, from, savedPosition) {// 跳转滚动
  //   return { x: 0, y: 0 }
  // }
})

export default router
