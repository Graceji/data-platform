<template>
  <div class="post">
    <div class="title" style="">
      <img :src="postData.src" alt="财务" style="">
      <h1 style="">{{postData.title}}</h1>
    </div>
    <div class="content" style="">
      <span>{{postData.content}}</span>
    </div>
    <el-button type="primary" style=""><router-link :to="postData.url">点击进入</router-link></el-button>
  </div>
</template>

<script>
  export default {
    name: 'post',
    data () {
      return {
      }
    },
    props: ['postData']
  }
</script>

<style lang="less">
  .post {
    height: 100%;
    width: 100%;
    position: relative;
    text-align: center;
    .title {
      img {
        width: 35%;
        height: 35%
      }
      h1 {
        margin: -2px 0 5% 0;
        font-size: 1.2em;
        font-family:PingFangSC-Regular;
        font-weight: normal;
      }
    }
    .content {
      margin-top: 1%;
      letter-spacing:0;
      text-align:justify;
      font-family:PingFangSC-Regular;
      font-size: 1em
    }
    .el-button {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 10%;
      background: rgb(255, 151, 0);
      border: 1px solid rgb(255, 151, 0);
      border-radius: 0px;
      padding: 2px;
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
</style>
