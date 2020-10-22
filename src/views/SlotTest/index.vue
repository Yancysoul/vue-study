<template>
  <div>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer" :foo="fooList"></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fooList: [
          '星期一',
          '星期二',
          '星期三'
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>