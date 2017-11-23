<template>
  <div id="customs">
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
            <el-col class="bom-left" :span="8">
              <div class="data-title"><span class="line">————</span><span class="line-gap">数据模块</span><span class="line">————</span></div>
              <div class="data-list1"><span class="data-list">基本信息</span><span class="data-list">股东信息</span></div>
              <div class="data-list1"><span class="data-list">董监高信息</span></div>
              <div class="data-list1"><span class="data-list">分支机构</span><span class="data-list">变动信息</span></div>
              <div class="data-list1"><span class="data-list">对外投资</span></div>
            </el-col>
            <el-col :span="16"></el-col>
          </el-row>
  </div>
</template>

<script>
 
</script>

<style lang="less">
  #customs {
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
      }
  }
</style>
