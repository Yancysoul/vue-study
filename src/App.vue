<template>
  <div id="app">
    master主分支
    <div class="github_link">
      <a href="https://github.com/Yancysoul" target="_balnk" title="跳转到github">
        <svg class="octicon octicon-mark-github v-align-middle" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  components: {
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
.github_link {
  position: fixed;
  top: 0;
  right: 0;
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  overflow: hidden;
  cursor: pointer;
}
.github_link a {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #888;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -10;
  transform: translate(40%, -40%);
  transition: all 0.3s;
}
.github_link a svg {
  transform: translate(-30%, 64%);
  transition: all 0.3s;
  height: 32px;
  width: 32px;
}
.github_link a:hover {
  width: 170%;
  height: 170%;
  transform: translate(50%, -50%);
}
.github_link a:hover svg {
  transform: translate(-60%, 170%);
  height: 42px;
  width: 42px;
}
</style>
