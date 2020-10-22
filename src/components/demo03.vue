<template>
  <div>
    {{ $attrs }}
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$emit('namess')
    }
  }
</script>

<style lang="scss" scoped>

</style>