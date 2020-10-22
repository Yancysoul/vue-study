<template>
  <div class="box">
    <div class="table-header">
      <div class="time">监测时间：{{ '2020-10' }}</div>
      <div class="type">ICU科别：<span>{{ 'NICU' }}</span></div>
    </div>
    <el-table
    :data="tableData"
    size="mini"
    show-summary
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="50">
    </el-table-column>
    <el-table-column label="BW≤1000g">
      <el-table-column
        label="新入新生儿数A"
        width="50px"
        prop="num1"
      />
      <el-table-column
        label="已住新生儿数B"
        width="50px"
        prop="num2"
      />
      <el-table-column
        label="脐 /中心静脉插管数C"
        width="50px"
        prop="num3"
      />
      <el-table-column
        label="使用呼吸机数D"
        width="50px"
        prop="num4"
      />
      <el-table-column
        label="使用尿管数D"
        width="50px"
        prop="num5"
      />
    </el-table-column>
    <el-table-column label="BW 1001g~1500g">
      <el-table-column
        label="新入新生儿数A"
        width="50px"
        prop="num6"
      />
      <el-table-column
        label="已住新生儿数B"
        width="50px"
        prop="num7"
      />
      <el-table-column
        label="脐 /中心静脉插管数C"
        width="50px"
        prop="num8"
      />
      <el-table-column
        label="使用呼吸机数D"
        width="50px"
        prop="num9"
      />
      <el-table-column
        label="使用尿管数D"
        width="50px"
        prop="num11"
      />
    </el-table-column>
    <el-table-column label="BW 1501g~2500g">
      <el-table-column
        label="新入新生儿数A"
        width="50px"
        prop="num12"
      />
      <el-table-column
        label="已住新生儿数B"
        width="50px"
        prop="num13"
      />
      <el-table-column
        label="脐 /中心静脉插管数C"
        width="50px"
        prop="num14"
      />
      <el-table-column
        label="使用呼吸机数D"
        width="50px"
        prop="num15"
      />
      <el-table-column
        label="使用尿管数D"
        width="50px"
        prop="num16"
      />
    </el-table-column>
    <el-table-column label="BW>2500g">
      <el-table-column
        label="新入新生儿数A"
        width="50px"
        prop="num17"
      />
      <el-table-column
        label="已住新生儿数B"
        width="50px"
        prop="num18"
      />
      <el-table-column
        label="脐 /中心静脉插管数C"
        width="50px"
        prop="num19"
      />
      <el-table-column
        label="使用呼吸机数D"
        width="50px"
        prop="num20"
      />
      <el-table-column
        label="使用尿管数D"
        width="50px"
        prop="num21"
      />
    </el-table-column>
    <el-table-column label="总计">
      <el-table-column
        label="新入新生儿数A"
        width="50px"
        prop="num22"
      />
      <el-table-column
        label="已住新生儿数B"
        width="50px"
        prop="num23"
      />
      <el-table-column
        label="脐 /中心静脉插管数C"
        width="50px"
        prop="num24"
      />
      <el-table-column
        label="使用呼吸机数D"
        width="50px"
        prop="num25"
      />
      <el-table-column
        label="使用尿管数D"
        width="50px"
        prop="num26"
      />
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  var tableData = []
  var obj = {}
  for (var i = 1; i < 27; i++) {
    obj['num' + i] = i
  }
  for(let j = 0; j < 30; j++) {
    tableData.push({ ...obj, date: j + 1})
  }
  export default {
    data() {
      return {
        tableData
      }
    }
  }
</script>

<style lang="scss" scoped>
.box {
  width: 1302px;
}
.table-header {
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  .type {
    span {
      color: rgb(101, 101, 255);
      font-weight: bold;
      cursor: pointer;
      &:hover {
        color: rgb(1, 1, 255);
      }
    }
  }
}
</style>