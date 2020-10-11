import Vue from 'vue'
import Vuex from 'vuex'

import createPersiste from 'vue-savedata'
// import mutations from './mutations'
import modulesA from './modules/modulesA'
import modulesB from './modules/modulesB'
 
Vue.use(Vuex)

const persiste = createPersiste({
	LS:[ {
		  module: modulesA,
		  storePath: ''
    },
    {
      module: modulesB,
      storePath: 'modulesB'
    },
 ],
	SS: {
		module: modulesB,
		storePath: 'modulesB'
	}
});
 
const state = {
  logined: false,
  userid: -1
}
 
const store = new Vuex.Store({
  state,
  mutations: {
    'UPDATE_LOGIN_STATUS': (state, payload) => {
      state.logined = !state.logined
      state.userid ++;
    }
  },
  modules: {
    modulesA: modulesA,
    modulesB: modulesB
  },
  plugins: [persiste],
})
 
export default store
