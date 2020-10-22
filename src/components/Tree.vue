<template>
  <div class="tree">
    <ul>
      <li
        v-for="item in list"
        :key="item.name">
        <div>
          {{ item.name }}
        </div>
        <div v-if="item.childrens && item.childrens.length">
          <Tree :list="item.childrens" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const list = [
  {
    name: '河南',
    childrens: [
      {
        name: '郑州'
      }, {
        name: '信阳',
        childrens: [
          {
            name: '息县'
          }, {
            name: '光山'
          }, {
            name: '新县'
          }, {
            name: '固始'
          }
        ]
      }, {
        name: '南阳'
      }, {
        name: '驻马店'
      }
    ]
  }, {
    name: '广东',
    childrens: [
      {
        name: '深圳'
      }, {
        name: '广州'
      }, {
        name: '东莞'
      }
    ]
  }, {
    name: '上海',
    childrens: []
  }
]
export default {
  name: 'Tree',
  props: {
    list: {
      type: Array,
      default: list
    }
  },
  data() {
    return {
    }
  },
  mounted() {
    var a = 1
    var b = 2
    var c = 3
    console.log(a + b + c)
  }
}
</script>

<style>

</style>