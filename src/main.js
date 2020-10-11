import Vue from 'vue'
import App from './App.vue'
import lodash from 'lodash'
Vue.use(lodash);

import './registerServiceWorker'
import router from './router'
import store from './store'
import 'reset.css'
import MyPlugin from './plug/index'
Vue.use(MyPlugin);

import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
 
Vue.use(VideoPlayer)

// import vueSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
// Vue.use(vueSwiper)

import animated from 'animate.css' // 4.0版本以上不兼容
Vue.use(animated)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// router.beforeResolve((to, from, next) => {
//   // if(to.name === 'Two'){
//   //   next('Three')
//   // }
//   // next()
// })

// router.afterEach((to, from) => {
//   // ...
// })






new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
