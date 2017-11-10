<template>
    <div class="dictionary-card" @click="toUrl">
      <img class="i-img" src="../../static/assets/icon_3d/icon.png" alt="">
      <img class="bgImg" :src="card.bg" width="48" height="48">
      <div class="text-content">
        <span>{{card.info}}</span>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'card',
    props: ['card'],
    data () {
      return {
      }
    },
    methods: {
      toUrl () {
        this.$router.push(this.card.url)
      }
    }
  }
</script>

<style lang="less">
  .dictionary-card {
    cursor: pointer;
    width: 18%;
    height: 12%;
    position: relative;
    float: left;
    margin: 0 1.5% 3% 0;
    background-color: #fff;
    text-align: left;
    overflow: hidden;
    .text-content {
      width: 65%;
      height: 100%;
      float: left;
      text-align: center;
      position: relative;
      display: table;
      min-width: 150px;
      font-size: 1.5rem;
      span {
        display: table-cell;
        vertical-align:middle;
      }
    }
    .bgImg {
      right: 30px;
      position: absolute;
      top: 50%;
      margin-top: -25px;
    }
    .i-img {
      width:14px;
      height:14px;
      position: absolute;
      right: 0;
      margin: 5px;
      background-color: #fff;
    }
  }
</style>
