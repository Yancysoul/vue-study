<template>
  <div id="app">
    <table-util style="width: 1200px; height: 400px;" height="100%" :datas="datas" />
  </div>
</template>

<script>
import TableUtil from '@/components/TableUtil'
export default {
  components: {
    TableUtil
  },
  computed: {
  },
  data() {
    return {
      datas: {
        lists: [],
        columns: [
          {
            label: '姓名',
            prop: 'name',
            width: '200px'
          }, {
            label: '编码',
            prop: 'code',
            width: '200px'
          }, {
            label: '性别',
            prop: 'sex',
            width: '200px'
          }, {
            label: '姓名',
            prop: 'name',
            width: '200px'
          }, {
            label: '出生日期',
            prop: 'birthday',
            width: '200px'
          }, {
            label: '体重',
            prop: 'weight',
            width: '200px'
          }, {
            label: '是否婚配',
            prop: 'marriage',
            width: '200px'
          }, {
            label: '手机号',
            prop: 'phone',
            width: '200px'
          }, {
            label: '地址',
            prop: 'address',
            width: '200px'
          }, {
            label: '更新时间',
            prop: 'updateTime',
            width: '200px'
          }
        ]
      }
    }
  },
  created() {
    this.$axios.get('http://rap2api.taobao.org/app/mock/259420/get/nis-test').then(res => {
      console.log(res);
      this.datas.lists = res.data.data
    })
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
