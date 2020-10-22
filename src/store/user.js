const user = {
  namespaced: true,
  state: {
    isLogin: false,
    username: ''
  },
  mutations: {
    login(state, username) {
      state.isLogin = true
      state.username = username
    },
    logout(state) {
      state.isLogin = false
    }
  },
  getters: {
    welcome(state) {
      return state.username + '欢迎登录'
    }
  },
  actions: {
    login({ commit }, username) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('login', username)
          resolve(true)
        }, 1000)
      })
    }
  }
}

export default user