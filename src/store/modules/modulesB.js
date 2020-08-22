const moduleB = {
    // namespaced: true,
    state: {
      isVip2: 1
    },
    mutations: {
      'UPDATE_TO_VIP2': (state, payload) => {
        state.isVip2++
      }
    },
    actions: {
      getVip2 ({ state, commit, rootState }) {
        commit('UPDATE_TO_VIP2')
      }
    },
    getters: {}
  }
   
  export default moduleB