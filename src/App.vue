<template>
  <div id="app">
    测试分支
    <GithubLogo></GithubLogo>
    <MouseWheelScroll></MouseWheelScroll>
  </div>
</template>

<script>
import GithubLogo from '@/views/GithubLogo'
import MouseWheelScroll from '@/views/MouseWheelScroll';
export default {
  components: {
    GithubLogo,
    MouseWheelScroll
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
