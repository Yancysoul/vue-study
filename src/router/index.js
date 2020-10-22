import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '',
      auth: false
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '',
      auth: true
    }
  },
  // {
  //   path: '/',
  //   name: 'Admin',
  //   component: () => import('@/views/Admin'),
  //   meta: {
  //     title: '',
  //     auth: true
  //   }
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '',
      auth: true
    }
  },
  {
    path: '*',
    name: '*',
    component: () => import('@/views/404.vue'),
    meta: {
      title: '',
      auth: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(store);
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
