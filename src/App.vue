<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home </router-link>
      <router-link to="/about">About</router-link> -->
      <!-- <div @click="homeClick">首页</div>
      <div @click="aboutClick">关于页</div>
      <div @click="adminClick">管理页</div>
      <span v-if="isLogin">{{ welcome }}</span> -->
    </div>
    <!-- <slot-test>我是匿名插槽里面的内容</slot-test>
    <slot-test>
      <template v-slot:header>
        我是具名插槽里面的内容
      </template>
    </slot-test>
    <slot-test>
      <template v-slot:footer="{ foo }">
        我是作用域插槽里面的内容{{ foo }}
      </template>
    </slot-test> -->
    <!-- <router-view/> -->
    <!-- <table1></table1> -->
    <form-test></form-test>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// import SlotTest from './views/SlotTest'
// import table1 from './views/table1'
import FormTest from './views/FormTest'
export default {
  components: {
    // SlotTest
    // table1
    FormTest
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
