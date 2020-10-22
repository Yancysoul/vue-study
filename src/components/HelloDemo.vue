<template>
  <div>
    hellodemo
    <button @click="btnClick">demo按钮</button>
  </div>
</template>

<script>
export default {
  inject: ['foo'],
  methods: {
    btnClick() {
      console.log(this.foo.bar, this.foo.good, this.foo.tom)
      this.$parent.$emit('demo-click')
    }
  }
}
</script>

<style>

</style>