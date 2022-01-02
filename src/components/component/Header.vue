<template>
  <div class="header">
    <el-header>
      <div class="title">管理系统</div>
      <div>qianan</div>
    </el-header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.header {
  .el-header {
    background: #2578b5;
    color: #fff;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    .title {
      width: 200px;
      font-size: 24px;
    }
  }
}
</style>
