<template>
  <div class="workList">
     <!-- 查询 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small">
        <el-form-item label="作业名称">
          <el-input v-model="formInline.jobName" placeholder="请输入作业名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="find">查询</el-button>
        </el-form-item>
      </el-form>
      <!-- 表格 -->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="jobName" label="作业名称" align="center"></el-table-column>
        <el-table-column prop="completedNumber" label="完成人数" align="center"></el-table-column>
        <el-table-column prop="unCompletedNumber" label="未完成人数" align="center"></el-table-column>
        <el-table-column prop="completion" label="完成率" align="center"></el-table-column>
        <el-table-column prop="check" label="待批改" align="center"></el-table-column>
        <el-table-column prop="checkRate" label="批改率" align="center"></el-table-column>
        <el-table-column prop="passNumber" label="及格人数" align="center"></el-table-column>
        <el-table-column prop="goodNumber" label="优秀人数" align="center"></el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  name: 'WorkList',
  data () {
    return {
      formInline: {
        jobName: ''
      },
      tableData: []
    }
  },
  methods: {
    find () {

    }
  }
}
</script>

<style lang="scss">
</style>
