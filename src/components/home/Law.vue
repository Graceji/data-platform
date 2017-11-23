<template>
  <div id="law">
    <el-row class="bom-top">
      <el-col class="bom-col qy-img" :span="7">
        <div class="name-content">企业量级</div>
        <div class="number-content">
          12<span class="unit-content">万</span>
        </div>
      </el-col>
      <el-col class="bom-col data-img" :span="7">
        <div class="name-content">数据完备度</div>
        <div class="number-content">
          98<span class="unit-content">%</span>
        </div>
      </el-col>
      <el-col class="bom-col fy-img" :span="7">
        <div class="name-content">覆盖法院</div>
        <div class="number-content">231</div>
      </el-col>
    </el-row>
    <el-row class="bom-bom">
      <el-col class="bom-left" :span="6">
        <div class="data-title"><span class="line">————</span><span class="line-gap">数据模块</span><span class="line">————</span></div>
        <div class="data-list1"><span class="data-list">基本信息</span><span class="data-list">股东信息</span></div>
        <div class="data-list1"><span class="data-list">董监高信息</span></div>
        <div class="data-list1"><span class="data-list">分支机构</span><span class="data-list">变动信息</span></div>
        <div class="data-list1"><span class="data-list">对外投资</span></div>
      </el-col>
      <el-col class="bom-right" :span="15">
        <div ref="bar" class="bar-chart"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'law',
  data () {
    return {
      data: {
        value: [ 12000, 41000, 20100, 2500, 26000 ],
        label: [ '裁判文书', '曝光台', '执行公告', '案件流程', '法院公告' ]
      }
    }
  },
  methods: {
    changeItem () {
      this.barChart = echarts.init(this.$refs.bar)
      this.barChart.setOption({
        backgroundColor: '#f7f7f7',
        title: {
          text: '各模块数据量',
          left: 'center',
          top: 10,
          textStyle: {
            fontFamily: 'PingFangSC-Regular',
            fontSize: 28,
            color: '#666666',
            fontWeight: 'lighter'
          }
        },
        grid: {
          show: false
        },
        calculable: true,
        tooltip: { trigger: 'axis' },
        xAxis: {
          type: 'category',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontFamily: 'PingFangSC-Regular',
            color: '#666666',
            fontSize: 14
          }
        },
        yAxis: {
          type: 'value',
          splitNumber: 9,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontFamily: 'PingFangSC-Regular',
            color: '#666666',
            fontSize: 14
          },
          splitLine: {
            show: false
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['#f0f0f0', '#f7f7f7']
            }
          }
        },
        series: [{
          name: 'all',
          type: 'bar',
          data: []
        }]
      })
      this.barChange('2017')
    },
    barChange (value) {
      this.barChart.setOption({
        xAxis: {
          data: this.data.label
        },
        yAxis: {
          axisLabel: {
            formatter: function (value, index) {
              const ans = value
              return ans
            }
          }
        },
        series: [
          {
            name: '数据量',
            data: this.data.value,
            symbol: 'none',
            barWidth: 45,
            itemStyle: {
              normal: {
                color: '#ffd012'
              }
            }
          }
        ]
      })
    }
  },
  mounted () {
    this.changeItem()
  }
}
</script>

<style lang="less">
  #law {
    min-width: 1406px;
    .bom-top {
      width: 90%;
      height: 110px;
      margin-top: 40px;
      margin-left: 20px;
      .bom-col {
        background: #ccc;
        margin-right: 30px;
        height: 110px;
        .name-content {
          padding-top: 12px;
          padding-left: 23px;
          text-align: left;
          font-family: PingFangSC-Regular;
          font-size: 18px;
          color: #ffffff;
          letter-spacing: 0;
        }
        .number-content {
          font-family: PingFangSC-Regular;
          font-size: 48px;
          color: #ffffff;
          letter-spacing: 0;
        }
        .unit-content {
          font-family: PingFangSC-Medium;
          font-size: 22px;
          margin-left: 2px;
        }
      }
      .qy-img {
        background-image: url("/static/assets/home_qy.png");
        background-repeat:no-repeat; 
        background-size:100% 100%;
        -moz-background-size:100% 100%;
      }
      .data-img {
        background-image: url("/static/assets/home_data.png");
        background-repeat:no-repeat; 
        background-size:100% 100%;
        -moz-background-size:100% 100%;
      }
      .fy-img {
        background-image: url("/static/assets/home_fy.png");
        background-repeat:no-repeat; 
        background-size:100% 100%;
        -moz-background-size:100% 100%;
      }
    }
    .bom-bom {
      margin-top: 31px;
      margin-bottom: 28px;
      .bom-left {
        min-width: 313px;
        min-height: 553px;
        margin-top: 110px;
        margin-left: 70px;
        .data-title {
          font-family:PingFangSC-Regular;
          font-size: 28px;
          color: #333333;
          letter-spacing: 0;
          text-align: justify;
          .line {
            display: inline-block;
            height: 28px;
            line-height: 28px;
            font-size: 16px;
            color: #666666;
            width: 65px;
          }
          .line-gap {
            margin-left: 37px;
            margin-right: 37px;
          }
        }
        .data-list1 {
          margin-left: 0;
          margin-bottom: 13px;
          height:49px;
          line-height: 49px;
          text-align: left;
          .data-list {
            margin-top: 48px;
            font-family: PingFangSC-Regular;
            display: inline-block;
            border: 1px solid #c6c6c6;
            width: 150px;
            font-size: 18px;
            margin-right: 12px;
            text-align: center;
          }
        }
      }
      .bom-right {
        min-width: 762px;
        min-height: 553px;
        background-color:#f7f7f7;
        .bar-chart {
          min-width: 762px;
          min-height: 553px;
          box-sizing: border-box;
        }
      }
    }
  }
</style>
