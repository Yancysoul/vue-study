<template>
  <div class="table-util">
    <el-table
      v-if="datas"
      :height="height"
      :data="datas.lists"
    >
      <el-table-column
        v-for="(column, index) in datas.columns"
        :key="index"
        :label="column.label"
        :prop="column.prop"
        :width="column.width"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    datas: {
      type: Object,
      require: true
    },
    height: {
      type: String,
      default: '100%'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
