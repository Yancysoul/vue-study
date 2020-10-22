<template>
  <div>
    <button @click="loginHandler">登录</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    methods: {
      loginHandler() {
        // this.$store.commit('login')
        // this.$store.state.isLogin = true
        this['user/login']('admin').then(res => {
          if(res) {
            this.$router.addRoutes([{
              path: '/Admin',
              name: 'Admin',
              component: () => import('@/views/Admin'),
              meta: {
                title: '',
                auth: true
              }
            }])
            this.$router.push(this.$route.query.redirect || '/')
          }
        })
      },
      ...mapActions(['user/login'])
      // ...mapMutations(['user/login'])
    },
  }
</script>

<style lang="scss" scoped>

</style>