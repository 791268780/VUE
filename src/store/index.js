import Vue from 'vue'
import Vuex from 'vuex'
// import mutations from './mutations'
import modulesA from './modules/modulesA'
import modulesB from './modules/modulesB'
 
Vue.use(Vuex)
 
const state = {
  logined: false,
  userid: -1
}
 
const store = new Vuex.Store({
  state,
  mutations: {
    'UPDATE_LOGIN_STATUS': (state, payload) => {
      state.logined = !state.logined
    }
  },
  modules: {
    modulesA: modulesA,
    modulesB: modulesB
  }
})
 
export default store
