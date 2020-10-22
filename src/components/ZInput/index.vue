<template>
  <div>
    <input :value="value" @input="input" v-bind="$attrs">
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,  // 设置为false，避免将外部元素设置到根元素上
    props: {
      value: {
        type: String,
        require: true
      }
    },
    methods: {
      input(e) {
        this.$emit('input', e.target.value)
        this.$parent.$emit('validate')
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>