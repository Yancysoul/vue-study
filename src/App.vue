<template>
  <div id="app">
    <table-util
      style="width: 1200px; height: 400px"
      height="100%"
      :datas="datas"
      :is-selection="true"
      :handle-row-class-name="handleRowClassName"
      @row-click="rowClick"
      @selection-change="selectionChange"
    />
    <table-util
      style="width: 1200px; height: 400px"
      height="100%"
      :datas="datas"
      :is-selection="true"
      :single-choice="false"
      @row-click="rowClick"
      @select="select"
    />
  </div>
</template>

<script>
import TableUtil from '@/components/TableUtil'
export default {
  components: {
    TableUtil
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
            width: '200px',
            renderHeader: this.sexRenderHeader
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
            width: '200px',
            sortable: true
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
  computed: {
  },
  created() {
    this.$axios.get('http://rap2api.taobao.org/app/mock/259420/get/nis-test').then(res => {
      // console.log(res)
      this.datas.lists = res.data.data
    })
  },
  methods: {
    handleRowClassName({ row, rowIndex }) {
      if (row.sex === 1) {
        return 'success-class'
      } else {
        return 'error-class'
      }
    },
    sexRenderHeader(h, { column, $index }) {
      const _this = this
      return h('span', {
        on: {
          click: function() {
            _this.sexClick()
          }
        },
        class: 'sex-header'
      }, column.label)
    },
    sexClick(val) {
      console.log('点击了性别')
    },
    rowClick(row) {
      console.log(row)
    },
    selectionChange(list) {
      console.log(list)
    },
    select(selection, row) {
      console.log(selection, row)
    }
  }
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
.sex-header {
  color: red;
}
.success-class {
  color: green;
}
.error-class {
  color: red;
}
</style>
