<template>
  <div class="map-data">
    <div id="main">

    </div>
  </div>
</template>

<script>
import geoJson from '../../assets/china.json'
export default {
  data () {
    return {

    }
  },
  mounted () {
    let myChart = this.$echarts.init(document.getElementById('main'))
    // 注册可用的地图，必须包括geo组件或map图标类型的时候才能使用
    this.$echarts.registerMap('china', geoJson)
    console.log('g', geoJson)
    let points = [
      {value: [118.8062, 31.9208], itemStyle: {color: '#4ab2e5'}},
      {value: [127.9688, 45.368], itemStyle: {color: '#4fb6d2'}},
      {value: [110.3467, 41.4899], itemstyle: {color: '#52b9c7'}},
      {value: [125.8154, 44.2584], itemStyle: { color: '#5abead' }},
      {value: [116.4551, 40.2539], itemStyle: {color: '#f34e2b'}},
      {value: [123.1238, 42.1216], itemStyle: {color: '#f56321'}},
      {value: [114.4995, 38.1006], itemStyle: { color: '#f56f1c' }},
      {value: [117.4219, 39.4189], itemStyle: {color: '#f58414'}},
      {value: [112.3352, 37.9413], itemstyle: { color: '#f58f0e' }},
      {value: [109.1162, 34.2004], itemStyle: {color: '#f5a305'}},
      {value: [103.5901, 36.3043], itemStyle: {color: '#e7ab0b'}},
      {value: [106.3586, 38.1775], itemStyle: {color: '#dfae10'}},
      {value: [101.4038, 36.8207], itemStyle: {color: '#d5b314'}},
      {value: [103.9526, 30.7617], itemStyle: {color: '#c1bb1f'}},
      {value: [108.384366, 30.439702], itemStyle: {color: '#b9be23'}},
      {value: [113.0823, 28.2568], itemstyle: {color: '#a6c62c'}},
      {value: [102.9199, 25.46639], itemstyle: {color: '#96cc34'}}
    ]
    let option = {
      geo: {
        map: 'china', // 地图类型
        aspectScale: 0.75, // 地图长宽比
        zoom: 1.1, // 当前视角缩放比
        itemStyle: {
          normal: {
            areaColor: {
              type: 'radial', // 径向渐变
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  // 0%处颜色
                  offset: 0,
                  color: '#09132c'
                },
                {
                  // 100%处颜色
                  offset: 1,
                  color: '#274d68'
                }
              ],
              globalCoord: true
            },
            // 阴影颜色
            shadowColor: 'rgb(58, 115, 192)',
            // 将阴影向上方偏移
            shadowOffsetX: 10,
            shadowOffsetY: 11
          }
        },
        // 为特定的区域配置样式
        regions: [
          {
            name: '南海诸岛',
            itemStyle: {
              opacity: 0
            }
          }
        ]
      },
      series: [
        // 配置地图相关参数，绘制地图，这个对象是关于地图图表的相关设置
        {
          type: 'map',
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#1DE9B6'
              }
            },
            emphasis: {
              textStyle: {
                color: 'rgb(183, 185, 14)'
              }

            }
          },
          itemStyle: {// 地图区域的图形样式
            normal: {
              borderColor: 'rgb(147, 235, 248)',
              borderWidth: 1,
              areaColor: {
                type: 'radial', // 径向渐变
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    // 0%处颜色
                    offset: 0,
                    color: 'rgb(31, 54, 150)'
                  },
                  {
                    // 100%处颜色
                    offset: 1,
                    color: 'rgb(89, 128, 142)'
                  }
                ],
                globalCoord: true
              }
            },
            emphasis: {
              areaColor: 'rgb(46, 299, 206)',
              borderColor: 0.1
            }
          },
          zoom: 1.1,
          map: 'china'
        },
        // 关于地图中散点图配置
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 1,
          symbolSize: 5, // 散点大小
          data: points,
          showEffectOn: 'emphasis',
          rippleEffect: {// 涟漪特效配置
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: false
            },
            emphasis: { show: true }
          },
          itemStyle: {
            normal: { color: '#ff8003' }
          }
        }
      ]
    }
    myChart.setOption(option)
  }
}
</script>
<style lang="scss">
.map-data {
  width: 100%;
  #main {
    width: 100%;
    height: 600px;
  }
}
</style>
