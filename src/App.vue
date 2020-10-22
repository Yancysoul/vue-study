<template>
  <div id="app">

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  components: {
  },
  computed: {
    ...mapState('user', ['isLogin']),
    ...mapGetters('user', ['welcome'])
  },
  methods: {
    homeClick() {
      this.$router.push({name: 'Home'})
    },
    aboutClick() {
      this.$router.push({name: 'About'})
    },
    adminClick() {
      this.$router.push({path: '/Admin'})
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
