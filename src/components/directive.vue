<template>
  <div>
    <input type="text" v-focus>
    <h1 v-promiss="role">我是一段话</h1>
    <button @click="toggleH1">修改h1标题的显示</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        role: 'admin'
      }
    },
    directives: {
      /* 钩子函数：
        bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
        inserted：被绑定元素插入父节点时调用（仅保证父节点不存在，但不一定已被插入文档中）
        update：所在组件的VNode更新时调用，但是可能发生在其子VNode更新之前。指令的值可能发生了改变，也可能没有。但是可以通过更新前后的值来忽略不必要的模版更新。
        componentUpdated：指令所在组件的VNode及其子VNode全部更新后调用。
        unbind：只调用一次，指令与元素解绑时调用。
      */
      focus: {
        inserted: (el, binding) => {
          console.log(binding);
          el.focus()
        }
      },
      promiss: {
        update: (el, binding) => {
          if (binding.value === 'admin') {
            el.style.display = 'block'
          } else {
            el.style.display = 'none'
          }
        }
      }
    },
    methods: {
      toggleH1() {
        this.role = this.role === 'admin' ? '111' : 'admin'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>