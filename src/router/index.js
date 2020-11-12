import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = []

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(store)
  if (to.path !== from.path) {
    if (to.meta.auth) {
      if (store.state.user.isLogin) {
        next()
      } else {
        next(`/login?redirect=${to.path}`)
      }
    } else {
      next()
    }
  }
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
