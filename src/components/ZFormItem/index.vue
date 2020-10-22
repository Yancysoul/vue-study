<template>
  <div class="z-form-item">
    <div class="label" style="width: 80px">{{ $attrs.label }}</div>
    <div>
      <slot></slot>
    </div>
    <span style="color: red" v-if="error">{{ error }}</span>
  </div>
</template>

<script>
  import Schema from 'async-validator'
  export default {
    inject: ['form'],
    data() {
      return {
        error: ''
      }
    },
    created() {
      // console.log(this.form);
    },
    mounted() {
      this.$on('validate', () => {
        this.validate()
      })
    },
    methods: {
      validate() {
        const rules = this.form.rules[this.$attrs.prop]
        const value = this.form.model[this.$attrs.prop]
        const desc = { [this.prop]: rules}
        const schema = new Schema(desc)
        return schema.validate({[this.prop]: value}, errors=> {
          console.log(errors);
          if(errors) {
            this.error = errors[0].message
          } else {
            this.error = ''
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.z-form-item {
  margin: 10px;
  display: flex;
  .label {
    flex-shrink: 0;
    text-align: right;
  }
}
</style>