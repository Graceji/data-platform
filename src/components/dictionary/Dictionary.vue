<template>
  <div class="dictionary">
    <div class="dictionary-nav">
      <el-radio-group v-model="dicType">
        <el-radio-button label="3D"></el-radio-button>
        <el-radio-button label="卡片"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="dictionary-content" v-if="dicType === '卡片'">
      <Card v-for="(card,index) in cardContents" :card="card" :key="index" ></Card>
    </div>
    <div class="dictionary-3D poster-main" v-if="dicType === '3D'">
      <div class="poster-btn poster-prev-btn" @click="animate('right')"></div>
      <div class="board"></div>
      <ul class="poster-list">
        <li class="poster-item" v-for="post in postDatas">
          <Post :postData="post"></Post>
        </li>
      </ul>

      <div class="poster-btn poster-next-btn" @click="animate('left')"></div>
    </div>
  </div>
</template>

<script>
  import Card from '../../_components/Card.vue'
  import Post from '../../_components/Post.vue'
  import $ from 'jquery'
  export default {
    name: 'dictionary',
    components: {
      Card,
      Post
    },
    data () {
      return {
        flag: true,
        dicType: '3D',
        cardContents: [
          {
            info: '法律',
            url: '/menu/dictionary/fh',
            bg: '/static/assets/icon_3d/falv.png'
          }, {
            info: '舆情',
            url: '/menu/dictionary/yuqing',
            bg: '/static/assets/icon_3d/yuqing.png'
          }, {
            info: '财务',
            url: '/menu/dictionary/smdb',
            bg: '/static/assets/icon_3d/caiwu.png'
          }, {
            info: '大宗商品',
            url: '/menu/dictionary/sci',
            bg: '/static/assets/icon_3d/dazongshangpin.png'
          }, {
            info: '海关',
            url: '/menu/dictionary/custom',
            bg: '/static/assets/icon_3d/haiguan.png'
          }, {
            info: '房地产',
            url: '/menu/dictionary/fang',
            bg: '/static/assets/icon_3d/fangdichan.png'
          }, {
            info: '工商',
            url: '/menu/dictionary/icd',
            bg: '/static/assets/icon_3d/gongshang.png'
          }, {
            info: '全球宏观',
            url: '/menu/dictionary/ceic',
            bg: '/static/assets/icon_3d/quanqiuhongguan.png'
          }, {
            info: '行业',
            url: '/menu/dictionary/industry',
            bg: '/static/assets/icon_3d/hangye.png'
          }, {
            info: '二手房',
            url: '/menu/dictionary/fangsec',
            bg: '/static/assets/icon_3d/ershoufang.png'
          }, {
            info: '并购',
            url: '/menu/dictionary/cvsource',
            bg: '/static/assets/icon_3d/binggou.png'
          }, {
            info: '专利',
            url: '/menu/dictionary/patent',
            bg: '/static/assets/icon_3d/zhuanli.png'
          }
        ],
        postDatas: [
          {
            title: '法律',
            content: '舆情数据来源于爬虫，我们试试监控2000家公司，舆情数据来源于爬虫，我们试试监控2000家公司',
            url: '/menu/dictionary/fh',
            src: '/static/assets/icon_3d/falv.png'
          },
          {
            title: '舆情',
            content: '舆情数据来源于爬虫，我们试试监控2000家公司，舆情数据来源于爬虫，我们试试监控2000家公司',
            url: '/menu/dictionary/yuqing',
            src: '/static/assets/icon_3d/yuqing.png'
          },
          {
            title: '财务',
            content: '舆情数据来源于爬虫，我们试试监控2000家公司，舆情数据来源于爬虫，我们试试监控2000家公司',
            url: '/menu/dictionary/smdb',
            src: '/static/assets/icon_3d/caiwu.png'
          },
          {
            title: '大宗商品',
            content: '舆情数据来源于爬虫，我们试试监控2000家公司，舆情数据来源于爬虫，我们试试监控2000家公司',
            url: '/menu/dictionary/sci',
            src: '/static/assets/icon_3d/dazongshangpin.png'
          },
          {
            title: '海关',
            content: '舆情数据来源于爬虫，我们试试监控2000家公司，舆情数据来源于爬虫，我们试试监控2000家公司',
            url: '/menu/dictionary/custom',
            src: '/static/assets/icon_3d/haiguan.png'
          },
          {
            title: '房地产',
            content: '舆情数据来源于爬虫，我们试试监控2000家公司，舆情数据来源于爬虫，我们试试监控2000家公司',
            url: '/menu/dictionary/fang',
            src: '/static/assets/icon_3d/fangdichan.png'
          },
          {
            title: '工商',
            content: '舆情数据来源于爬虫，我们试试监控2000家公司，舆情数据来源于爬虫，我们试试监控2000家公司',
            url: '/menu/dictionary/icd',
            src: '/static/assets/icon_3d/gongshang.png'
          },
          {
            title: '全球宏观',
            content: '舆情数据来源于爬虫，我们试试监控2000家公司，舆情数据来源于爬虫，我们试试监控2000家公司',
            url: '/menu/dictionary/ceic',
            src: '/static/assets/icon_3d/quanqiuhongguan.png'
          },
          {
            title: '行业',
            content: '舆情数据来源于爬虫，我们试试监控2000家公司，舆情数据来源于爬虫，我们试试监控2000家公司',
            url: '/menu/dictionary/industry',
            src: '/static/assets/icon_3d/hangye.png'
          },
          {
            title: '二手房',
            content: '舆情数据来源于爬虫，我们试试监控2000家公司，舆情数据来源于爬虫，我们试试监控2000家公司',
            url: '/menu/dictionary/fangsec',
            src: '/static/assets/icon_3d/ershoufang.png'
          },
          {
            title: '并购',
            content: '舆情数据来源于爬虫，我们试试监控2000家公司，舆情数据来源于爬虫，我们试试监控2000家公司',
            url: '/menu/dictionary/cvsource',
            src: '/static/assets/icon_3d/binggou.png'
          },
          {
            title: '专利',
            content: '舆情数据来源于爬虫，我们试试监控2000家公司，舆情数据来源于爬虫，我们试试监控2000家公司',
            url: '/menu/dictionary/patent',
            src: '/static/assets/icon_3d/zhuanli.png'
          }
        ]
      }
    },
    methods: {
      animate (direction) {
        let zIndexArr = []
        let fontSizeArr = []
        if (this.flag) {
          this.flag = false
          if (direction === 'right') {
            let first = $('.poster-list').children(':first')
            $('.poster-list').children().each((index, item) => {
              let next = $(item).next().length ? $(item).next() : first
              let zIndex = next.css('z-index')
              let fontSize = next.css('font-size')
              fontSizeArr.push(fontSize)
              zIndexArr.push(zIndex)
              $(item).animate({
                width: next.css('width'),
                height: next.css('height'),
                opacity: next.css('opacity'),
                left: next.css('left'),
                top: next.css('top')
              }, 500, () => {
                this.flag = true
              })
            })
          } else {
            let last = $('.poster-list').children(':last')
            $('.poster-list').children().each((index, item) => {
              let prev = $(item).prev().length ? $(item).prev() : last
              let zIndex = prev.css('z-index')
              zIndexArr.push(zIndex)
              let fontSize = prev.css('font-size')
              fontSizeArr.push(fontSize)
              $(item).animate({
                width: prev.css('width'),
                height: prev.css('height'),
                opacity: prev.css('opacity'),
                left: prev.css('left'),
                top: prev.css('top')
              }, 500, () => {
                this.flag = true
              })
            })
          }
          $('.poster-list').children().each(function (i) {
            $(this).css('zIndex', zIndexArr[i])
            $(this).css('fontSize', fontSizeArr[i])
          })
        }
      }
    },
    mounted () {
    }
  }
</script>

<style lang="less">
  .dictionary {
    height: 100%;
    height: 100%;
    min-width: 800px;
    position: relative;
    .dictionary-nav {
      height: 37px;
      text-align: left;
      box-sizing: border-box;
      margin: 20px;
      width: 15%;
      .el-radio-group {
        width: 100%;
        height: 100%;
        label {
          width: 50%;
          height: 100%;
          .el-radio-button__inner {
            width: 100%;
            height: 100%;
          }
        }
      }
      .el-radio-button__orig-radio:checked+.el-radio-button__inner {
        background:#ff9700;
        border:1px solid #ff9700;
        box-shadow:0 1px 4px 0 rgba(221,221,221,0.50);
      }
    }
    .dictionary-content {
      height: 100%;
      width: 100%;
      min-width: 1200px;
      margin: 0px 0 0 20px;
      box-sizing: border-box;
      position: absolute;
      overflow: hidden;
    }
    .dictionary-3D.poster-main {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      height: 50%;
      overflow: hidden;
      .board {
        position: absolute;
        width:100%;
        height:100%;
        z-index: 9;
      }
      .poster-list {
        position: relative;
        width:100%;
        height:100%;
        list-style: none;
        padding: 0;
        margin: 0;
        .poster-item {
          width:26%;
          height:100%;
          position: absolute;
          left: 100%;
          z-index: 1;
          opacity: 0;
          background:#ffffff;
          box-shadow:0 8px 23px 9px rgba(221,221,221,0.50);
          padding: 2%;
          box-sizing: border-box;
          &:nth-child(1) {
            left: -26%;
            top: 25%;
            height: 50%;
            width: 10%;
            opacity: 0;
            background:#ffffff;
            box-shadow:0 8px 23px 9px rgba(221,221,221,0.50);
            box-sizing: border-box;
          }
          &:nth-child(2) {
            z-index: 1;
            opacity: 0.4;
            left: 0;
            top: 12%;
            width: 16%;
            height: 76%;
            background:#ffffff;
            box-shadow:0 8px 23px 9px rgba(221,221,221,0.50);
            box-sizing: border-box;
            font-size: 12px;
          }
          &:nth-child(3) {
            left: 16%;
            top: 7%;
            z-index: 5;
            opacity: 0.8;
            width: 21%;
            height: 86%;
            background:#ffffff;
            box-shadow:0 8px 23px 9px rgba(221,221,221,0.50);
            box-sizing: border-box;
            font-size: 14px;
          }
          &:nth-child(4) {
            width:26%;
            height:100%;
            left: 37%;
            top: 0;
            z-index: 10;
            opacity: 1;
            background:#ffffff;
            box-shadow:0 8px 23px 9px rgba(221,221,221,0.50);
            padding: 3%;
            box-sizing: border-box;
            font-size: 16px;
          }
          &:nth-child(5) {
            left: 63%;
            top: 7%;
            z-index: 5;
            opacity: 0.8;
            width: 21%;
            height: 86%;background:#ffffff;
            box-shadow:0 8px 23px 9px rgba(221,221,221,0.50);
            box-sizing: border-box;
            font-size: 14px;
          }
          &:nth-child(6) {
            z-index: 1;
            opacity: 0.4;
            left: 84%;
            top: 12%;
            width: 16%;
            height: 76%;
            background:#ffffff;
            box-shadow:0 8px 23px 9px rgba(221,221,221,0.50);
            box-sizing: border-box;
            font-size: 12px;
          }
        }
      }
      .poster-btn {
        position:absolute;
        top:0;
        width:100px;
        height:100%;
        z-index:10;
        cursor:pointer;
        opacity:0.8
      }
      .poster-prev-btn {
        margin: auto 0;
        left:0;
        background: url(../../assets/btn_l.png) no-repeat center center;
      }
      .poster-next-btn{
        right:0;
        background: url(../../assets/btn_r.png) no-repeat center center;
      }
    }
  }
</style>
