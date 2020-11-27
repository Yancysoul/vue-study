<template>
  <div class="table-util">
    <el-table
      v-if="datas"
      ref="tableRef"
      width="100%"
      :height="height"
      :data="datas.lists"
      :highlight-current-row="true"
      :size="size"
      :border="border"
      :header-row-class-name="handleHeaderRowClassName"
      :header-cell-class-name="handleHeaderCellClassName"
      :row-class-name="handleRowClassName"
      :show-header="showHeader"
      @row-click="rowClick"
      @row-dblclick="rowDblclick"
      @selection-change="handleSelectionChange"
      @select="handleSelect"
      @select-all="handleSelectAll"
    >
      <el-table-column
        v-if="isSelection"
        type="selection"
        :width="selectionWidth"
        :render-header="henderSelectionHeader"
      />
      <el-table-column
        v-if="isIndex"
        type="index"
        width="50"
      />
      <template v-for="(column, index) in datas.columns">
        <!-- 插槽列 -->
        <slot v-if="column.slot" :name="column.slot" />
        <!-- 普通列 -->
        <el-table-column
          v-else
          :key="index"
          show-overflow-tooltip
          :label="column.label"
          :prop="column.prop"
          :width="column.width"
          :min-width="column.minWidth"
          :sortable="column.sortable"
          :formatter="column.formatter"
          :align="column.align || ''"
          :render-header="column.renderHeader"
        />
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    // 表格数据
    // eslint-disable-next-line vue/require-default-prop
    datas: {
      type: Object,
      require: true
    },
    // 表格是否显示边框
    border: {
      type: Boolean,
      default: true
    },
    // 表格高
    height: {
      type: String || Object,
      default: null
    },
    // 是否显示选框
    isSelection: {
      type: Boolean,
      default: false
    },
    // 选框的宽度
    selectionWidth: {
      type: String,
      default: '40'
    },
    // 是否显示序号
    isIndex: {
      type: Boolean,
      default: false
    },
    // 表格大小
    size: {
      type: String,
      default: 'medium'
    },
    // 是否为单选
    singleChoice: {
      type: Boolean,
      default: true
    },
    // 设置是否显示表头
    showHeader: {
      type: Boolean,
      default: true
    },
    // 设置是否为斑马纹
    stripe: {
      type: Boolean,
      default: false
    },
    // 行 className 回调函数，{ row, rowIndex } / String
    handleRowClassName: {
      type: Function,
      default: null
    }
  },
  methods: {
    // 单击行
    rowClick(row) {
      this.setSelection(row)
      this.$emit('row-click', row)
    },
    // 双击行
    rowDblclick(row) {
      this.$emit('row-dblclick', row)
    },
    // 选择项发生变化时，参数为当前选中的行数据集合
    handleSelectionChange(list) {
      this.$emit('selection-change', list)
    },
    // 手动勾选行事件
    handleSelect(selection, row) {
      this.setSelection(row)
      this.$emit('select', selection, row)
    },
    handleHeaderRowClassName(data) {
      // console.log(row, rowIndex)
      console.log(data)
    },
    // 设置表头单元格的 className
    handleHeaderCellClassName(data) {
      if (this.singleChoice) {
        // 单选的时候取消不显示全选按钮
        if (data.columnIndex === 0) {
          return 'selectAllHidden'
        }
      }
    },
    henderSelectionHeader(h, { column, $index }) {
      if (this.singleChoice) {
        return h('span', {}, '')
      }
    },
    // 勾选全选按钮
    handleSelectAll(selection) {
      this.$emit('select-all', selection)
    },
    setSelection(row) {
      if (this.singleChoice) {
        this.$refs.tableRef.clearSelection()
      }
      this.$refs.tableRef.toggleRowSelection(row, true)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .selectAllHidden .el-checkbox__inner {
  display: none;
}
</style>
