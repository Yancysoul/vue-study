<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    provide() {
      return {
        form: this
      }
    },
    props: {
      model: {
        type: Object,
        require: true
      },
      rules: {
        type: Object
      }
    },
    methods: {
      validate(call) {
        console.log(this.$children);
        const tasks = this.$children
          .filter(item => item.$attrs.prop)
          .map(item => item.validate())
        Promise.all(tasks)
          .then(() => call(true))
          .catch(() => call(false))
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>