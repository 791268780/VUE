const moduleA = {
  // namespaced: true, // 有问题
  state: {
    isVip1: 3
  },
  mutations: {
    'UPDATE_TO_VIP1': (state, payload) => {
      state.isVip1++;
    }
  },
  actions: {
    getVip1 ({ state, commit, rootState }) {
      commit('UPDATE_TO_VIP1')
    }
  },
  getters: {}
}
 
export default moduleA