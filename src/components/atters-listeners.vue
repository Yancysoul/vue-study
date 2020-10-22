<template>
  <div>
    sttrs-listeners


    <br>
    {{ value }}
    <br>
    {{ $attrs }}
    {{ $listeners }}
    <demo03 v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
/* 
  $attrs可将父组件的属性传递给子孙组件
  $listeners可将父组件的事件传递给子孙组件
*/
  import demo03 from './demo03'
  export default {
    components: {
      demo03
    },
    props: ['value'],
    mounted() {
      this.$emit('namess')
    }
  }
</script>

<style lang="scss" scoped>

</style>