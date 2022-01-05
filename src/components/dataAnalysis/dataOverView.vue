<template>
  <div class="data-view">
    <el-card>
      <div id="main1"></div>
    </el-card>
    <el-card>
      <div id="main2"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    // 基于准备好的dom,初始化echarts实例
    var myChart = this.$echarts.init(document.getElementById('main1'))
    myChart.setOption({
      title: {
        text: '九年级'
      },
      // x轴
      xAxis: {
        data: ['一班', '二班', '三班', '四班', '五班', '六班']
      },
      tooltip: {},
      yAxis: {},
      series: [{
        name: '人数',
        type: 'bar',
        data: [45, 42, 49, 47, 43]
      }]
    })

    var myChart2 = this.$echarts.init(document.getElementById('main2'))
    let option = {
      title: {
        text: '进阶'
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      // x轴
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      tooltip: {
        trigger: 'axis'
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 142, 132, 1195, 143, 176]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [190, 133, 1165, 195, 1243, 333]
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          data: [112, 176, 1188, 1222, 310, 340]
        },
        {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          data: [176, 1278, 199, 295, 243, 290]
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          data: [187, 1290, 2112, 1295, 1143, 2222]
        }
      ]
    }
    myChart2.setOption(option)
  }
}
</script>
<style lang="scss">
.data-view {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 50%;
    #main1, #main2 {
     height: 500px;
    }
  }
}
</style>
