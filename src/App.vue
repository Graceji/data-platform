<template>
  <div id="app">
    <transition name="fade" mode="out-in" style="padding-bottom: 60px">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods: {
    sendMail () {
      const mail = 'chenkaifeng873@pingan.com.cn'
      const subject = '[数据平台意见反馈]'
      const body = ''
      window.open(`mailto:${mail}?subject=${subject}&body=${body}`)
    }
  },
  created () {
    if (this.$router.currentRoute.path === '/login') {
      if (sessionStorage.getItem('username')) {
        this.$router.push('/menu/home')
      }
    }
  }
}
</script>

<style lang="less">
  body,html,#app {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
    min-height: 100%;
    .footer {
      height: 60px;
      line-height: 60px ;
      width: 100%;
      z-index: 1000;
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-to {
      opacity: 0
    }
  }
</style>
