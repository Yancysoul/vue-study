<template>
  <div>
    <input type="text" :value="name" @input="inputChange">
  </div>
</template>

<script>
  export default {
    props: ['name'],
    methods: {
      inputChange(e) {
        this.$emit('update:name', e.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>