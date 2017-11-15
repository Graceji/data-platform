<template>
  <div id="home">
    <div class="home-nav">
      <el-radio-group v-model="homeType" @change="changeItem">
        <el-radio-button label="数据源监控"></el-radio-button>
        <el-radio-button label="数据覆盖"></el-radio-button>
        <el-radio-button label="数据库监控"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="home-content" style="height: 994px" v-if="homeType === '数据源监控'">
      <div class="source">
        <div  class="pie">
          <el-select v-model="pieTimeValue" placeholder="请选择" @change="pieChange">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <div ref="pie" class="pie-chart"></div>
        </div>
        <div class="bar">
          <el-select v-model="barTimeValue" placeholder="请选择" @change="barChange">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <div ref="bar" class="bar-chart"></div>
        </div>
        <div class="line">
          <el-select v-model="lineTimeValue" placeholder="请选择" @change="lineChange">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <div ref="line" class="line-chart"></div>
        </div>
      </div>
    </div>
    <div class="home-content" style="height: 994px" v-if="homeType === '数据覆盖'">
      <el-row class="header-content" >
        <el-col class="mid-content" :span="6">
          <div class="name-content">数据纬度</div>
          <div class="number-content">12</div>
        </el-col>
        <el-col class="mid-content" :span="10">
          <div class="name-content">更新频率</div>
          <div class="name-content">
            <el-row>
              <el-col style="text-align: center;" :span="6">
                  <div class="number-content" style="color:#ff603c;">
                    1<span class="unit-content">实时</span>
                    <span class="border-line">|</span>
                  </div>
              </el-col>
              <el-col style="text-align: center;" :span="6">
                  <div class="number-content" style="color:#ff603c;">
                    3<span class="unit-content">实时</span>
                    <span class="border-line">|</span>
                  </div>
              </el-col>
              <el-col style="text-align: center;" :span="6">
                  <div class="number-content" style="color:#ff603c;">
                    4<span class="unit-content">月度</span>
                    <span class="border-line">|</span>
                  </div>
              </el-col>
              <el-col style="text-align: center;" :span="6">
                  <div class="number-content"style="color:#ff603c;" >
                    1<span class="unit-content">定期</span>
                  </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col class="mid-content" :span="6">
          <div class="name-content">数据量级</div>
          <div class="number-content" style="color:#92e900;">
            12<span class="unit-content" style="margin-left: 8px;">亿</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="bom-content" :span="4">
          <div class="navigator">
            <img @click="handleClickUp(navigator)" src="/static/assets/Rectangle up.png">
            <el-menu
              default-active="1"
              class="navigator-content"
              @select="handleSelect"
              >
              <el-menu-item 
                v-for="item in navigator"
                :key="item.index"
                :index="item.index"
                v-bind:class="{'item-navigator': true, 'is-active': (item.index===1)&&isActive}"
                >
                  <span slot="title">{{item.label}}</span>
              </el-menu-item>
            </el-menu>
            <img @click="handleClickDown(navigator)" src="/static/assets/Rectangle down.png">
          </div>
        </el-col>
        <el-col class="bom-content" :span="18">
          <div>
            <el-row class="bom-row">  
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
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="home-content" style="height: 100%" v-if="homeType === '数据库监控'">
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'Home',
    data () {
      return {
        homeType: '数据源监控',
        pieTimeValue: '2017年',
        barTimeValue: '2017年',
        lineTimeValue: '2017年',
        options: [{
          value: '2017',
          label: '2017年'
        },
        {
          value: '2016',
          label: '2016年'
        },
        {
          value: '2015',
          label: '2015年'
        }]
      }
    },
    methods: {
      changeItem (label) {
        if (label === '数据源监控') {
          this.pieChart = echarts.init(this.$refs.pie)
          this.barChart = echarts.init(this.$refs.bar)
          this.lineChart = echarts.init(this.$refs.line)
          let pieOption = {
            backgroundColor: '#fff',
            title: {
              text: '企业大数据来源',
              left: 'center',
              top: 10,
              textStyle: {
                color: '#ccc'
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series: [{
              type: 'pie',
              radius: '70%',
              center: ['50%', '60%'],
              label: {
                normal: {
                  textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        this.pieChart.setOption(pieOption)
        this.barChart.setOption({
          backgroundColor: '#fff',
          title: {
            text: '数据总量变化',
            left: 'center',
            top: 10,
            textStyle: {
              color: '#ccc'
            }
          },
          calculable: true,
          tooltip: { trigger: 'axis' },
          legend: {
            itemGap: 10,
            data: []
          },
          xAxis: {
            name: '时间/月',
            type: 'category',
            data: []
          },
          yAxis: {
            name: '数据量',
            type: 'value'
          },
          series: [
            {
              name: 'all',
              type: 'bar',
              data: []
            }
          ]
        })
        this.lineChart.setOption({
          backgroundColor: '#fff',
          title: {
            textStyle: {
              color: '#ccc'
            },
            left: 'center',
            top: 10,
            text: '数据源月度增量'
          },
          tooltip: { trigger: 'axis' },
          legend: {
            bottom: 10,
            data: ['fh', 'gil', 'icd', 'rdms', 'sci', 'smdb', 'ceic', 'creis']
          },
          xAxis: {
            name: '时间/月',
            data: []
          },
          yAxis: {
            name: '数据量'
          },
          series: [
            {
              name: 'fh',
              type: 'line',
              data: []
            },
            {
              name: 'gil',
              type: 'line',
              data: []
            },
            {
              name: 'icd',
              type: 'line',
              data: []
            },
            {
              name: 'rdms',
              type: 'line',
              data: []
            },
            {
              name: 'sci',
              type: 'line',
              data: []
            },
            {
              name: 'smdb',
              type: 'line',
              data: []
            },
            {
              name: 'ceic',
              type: 'line',
              data: []
            },
            {
              name: 'creis',
              type: 'line',
              data: []
            }
          ]
        })
        this.pieChange('2017')
        this.barChange('2017')
        this.lineChange('2017')
      }
    },
    pieChange (value) {
      this.$store
        .dispatch('home/getPieData', {
          value
        })
        .then(data => {
          this.pieChart.setOption({
            legend: {
              orient: 'vertical',
              x: 'left',
              left: 20,
              top: 5,
              itemGap: 10,
              data: data.category
            },
            series: [
              {
                name: '数据来源',
                data: (function () {
                  let res = []
                  for (let i = 0, size = data.total.length; i < size; i++) {
                    res.push({
                      name: data.category[i],
                      value: data.total[i]
                    })
                  }
                  return res
                })()
              }
            ]
          })
        })
    },
    barChange (value) {
      this.$store
        .dispatch('home/getBarData', {
          value
        })
        .then(data => {
          this.barChart.setOption({
            legend: {
              orient: 'vertical',
              x: 'left',
              left: 20,
              top: 5,
              itemGap: 10,
              data: ['all']
            },
            xAxis: {
              data: data.month
            },
            yAxis: {
              axisLabel: {
                formatter: function (value, index) {
                  const ans = value / 10000
                  if (ans === 0) {
                    return 0
                  }
                  return ans + '万'
                }
              }
            },
            series: [
              {
                name: 'all',
                data: data.all,
                symbol: 'none',
                itemStyle: {
                  normal: {
                    color: 'grey'
                  }
                }
              }
            ]
          })
        })
    },
    lineChange (value) {
      this.$store
        .dispatch('home/getLineData', {
          value
        })
        .then(data => {
          this.lineChart.setOption({
            xAxis: {
              data: data.month
            },
            yAxis: {
              axisLabel: {
                formatter: function (value, index) {
                  const ans = value / 10000
                  if (ans === 0) {
                    return 0
                  }
                  return ans + '万'
                }
              }
            },
            series: [
              {
                // 根据名字对应到相应的系列
                name: 'fh',
                data: data.fh
              },
              {
                name: 'gil',
                data: data.gil
              },
              {
                name: 'icd',
                data: data.icd
              },
              {
                name: 'rdms',
                data: data.rdms
              },
              {
                name: 'sci',
                data: data.sci,
                itemStyle: {
                  normal: { color: 'grey' }
                }
              },
              {
                name: 'smdb',
                data: data.smdb,
                itemStyle: {
                  normal: { color: 'black' }
                }
              },
              {
                name: 'ceic',
                data: data.ceic,
                itemStyle: {
                  normal: { color: 'blue' }
                }
              },
              {
                name: 'creis',
                data: data.creis,
                itemStyle: {
                  normal: { color: 'pink' }
                }
              }
            ]
          })
        })
    },
    handleSelect (key, indexPath) {
      this.isActive = false
      console.log(key, indexPath)
    },
    handleClickUp (navigator) {
      let len = navigator.length
      for (let i = 0; i < len - 1; i++) {
        navigator[i].label = navigator[i + 1].label
      }
      navigator[len - 1].label = navigator[0].label
    },
    handleClickDown (navigator) {
      let len = navigator.length
      for (let i = len - 1; i > 0; i--) {
        navigator[i].label = navigator[i - 1].label
      }
      navigator[0].label = navigator[len - 1].label
    }
  },
  mounted () {
    this.changeItem('数据源监控')
  }
}
</script>

<style lang="less">
#home {
  // height: 1902px;
  .home-nav {
    // height: 5%;
    text-align: left;
    margin: 20px;
    .el-radio-group {
      width: 100%;
    }
    .el-radio-button {
      height: 38px;
      line-height: 38px;
      .el-radio-button__inner {
        background: #ffffff;
        box-shadow: 0 1px 4px 0 rgba(221, 221, 221, 0.5);
        width: 150px;
      }
    }
    .el-radio-button__orig-radio:checked + .el-radio-button__inner {
      background: #ff9700;
      border-color: #ff9700;
      box-shadow: 0 1px 4px 0 rgba(221, 221, 221, 0.5);
    }
  }
  .home-content {
    margin: 20px;
    width: 1406px;
    .header-content {
      margin-right: 30px;
    }
    .mid-content {
      height: 110px;
      background: #ffffff;
      margin-right: 30px;
      box-shadow: 0 1px 4px 0 rgba(221, 221, 221, 0.5);
      .name-content {
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #666666;
        padding-left: 28px;
        padding-top: 9px;
        text-align: left;
      }
      .number-content {
        font-family: PingFangSC-Medium;
        font-size: 42px;
        color: #00e6ff;
        .unit-content {
          font-family: PingFangSC-Medium;
          font-size: 22px;
          color: #666666;
          margin-left: 16px;
        }
        .border-line {
          margin-left: 16px;
          font-family: PingFangSC-Light;
          font-size: 22px;
          color: #dcdcdc;
          letter-spacing: 0;
        }
      }
    }
    .bom-content {
      height: 762px;
      background: #ffffff;
      margin-top: 30px;
      margin-right: 30px;
      .bom-row {
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
        }
        .data-img {
          background-image: url("/static/assets/home_data.png");
        }
        .fy-img {
          background-image: url("/static/assets/home_fy.png");
        }
      }
      .navigator {
        margin: 30px 0;
        .navigator-content {
          text-align: center;
          background: #ffffff;
          text-align: center;
          :hover {
            background: #ffffff;
          }
          .item-navigator {
            border:1px solid #ff9700;
            border-radius:100px;
            width:178px;
            height:38px;
            line-height: 38px;
            margin: 32px auto;
          }
        }
      .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active {
        background: #ff9700;
        color: #ffffff;
        box-shadow: 0 8px 14px 0 #f9d8a8;
        :hover {
          background: #ff9700;
        }
      }
    }
    // .grid-content {
    //   height: 110px;
    //   background:#ffffff;
    //   box-shadow:0 1px 4px 0 rgba(221,221,221,0.50);
    // }
  }
  .source {
    height: 95%;
    position: relative;
    overflow: hidden;
    padding: 0 20px 20px 20px;
    .pie {
      height: 45%;
      position: relative;
      float: left;
      width: 49%;
      .el-select {
        float: right;
      }
      .pie-chart {
        width: 100%;
        height: 100%;
      }
    }
    .bar {
      position: relative;
      float: right;
      width: 49%;
      height: 45%;
      .el-select {
        float: right;
      }
      .bar-chart {
        box-sizing: border-box;
        padding: 0 10px;
        width: 100%;
        height: 100%;
      }
    }
    .line {
      position: relative;
      float: left;
      margin-top: 20px;
      width: 100%;
      height: 45%;
      .el-select {
        float: right;
      }
      .line-chart {
        box-sizing: border-box;
        padding: 0 10px;
        width: 100%;
        height: 100%;
      }
    }
    .el-input__inner {
      width: 100px;
      height: 20px;
    }
    .el-select {
      position: absolute;
      z-index: 100;
      right: 20px;
      top: 10px;
    }
  }
}
}
</style>
