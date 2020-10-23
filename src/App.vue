<template>
  <div id="app">
    测试分支
    <GithubLogo></GithubLogo>
  </div>
</template>

<script>
import GithubLogo from '@/views/GithubLogo'
export default {
  components: {
    GithubLogo
  },
  data() {
    return {
      searchData: [],
      value: ''
    }
  },
  computed: {
    filterSearchData() {
      return this.searchData.filter(item => item.name.match())
    }
  },
  methods: {
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
