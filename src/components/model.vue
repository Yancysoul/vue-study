<template>
  <div>
    <input type="text" :value="title" @input="inputValue">
  </div>
</template>

<script>
  export default {
    props: ['title'],
    methods: {
      inputValue(e) {
        this.$emit('input', e.target.value)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>