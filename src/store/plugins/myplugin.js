const myplugin = store => {
  if (localStorage) {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      store.commit('user/login', user.username)
    }
  }
  store.subscribe((mutations, state) => {
    if (mutations.type === 'user/login') {
      const user = JSON.stringify(state.user)
      localStorage.setItem('user', user)
    } else if (mutations.type === 'user/logout') {
      localStorage.removeItem('user')
    }
  })
}

export default myplugin