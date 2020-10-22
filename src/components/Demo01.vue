<template>
  <div>{{ text }}
    <br>
    <button @click="handleClick">hello</button>
    <input type="file" ref="uploadExcel" @change="fileChange" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '你好',
      excelName: '',
      excelFile: ''
    }
  },
  methods: {
    handleClick() {
      this.text = this.text === '你好' ? 'hello' : '你好'
    },
    fileChange(event) {
      let fileList = event.target.files
      this.excelName = fileList[0].name
      this.excelFile = this.$refs.uploadExcel.files[0];
      console.log(fileList)
      console.log(this.excelFile)
    }
  }
}
</script>

<style>

</style>