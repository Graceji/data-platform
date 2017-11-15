<template>
  <div id="menu">
    <div class="main-navbar">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">
          <span class="heading-font">企业大数据数据仓库</span>
        </a>
      </div>
      <div class="user-login">
        <i class="ti-user mr5"></i>
        <span class="heading-font">{{username}}</span>
        <i class="fa fa-sign-out ml20"></i>
        <span class="heading-exit"><router-link to="/" tag="li">退出</router-link></span>
      </div>
      <div class="search">
        <i class="ti-search search-icon"></i>
        <el-input v-model="search"></el-input>
        <i class="fa fa-microphone microphone-icon"></i>
      </div>
    </div>
    <el-col :span="4" class="main-sidebar">
      <el-menu :default-active="this.$route.path" router class="el-menu menu-navbar" style="height: 100%">
        <el-menu-item index="/menu/home"><i class="fa fa-home mr10"></i>首&nbsp&nbsp页</el-menu-item>
        <el-menu-item index="/menu/dictionary"><i class="ti-book mr10"></i>数据字典</el-menu-item>
        <el-menu-item index="/menu/feedBack"><i class="ti-clipboard mr10"></i>反馈数据问题</el-menu-item>
        <el-menu-item index="/menu/messages"><i class="ti-info-alt mr10"></i>数据量查看</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="21" style="margin: 53px 172px;height: 90%">
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </el-col>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        username: window.sessionStorage.getItem('username')
      }
    },
    computed: {
      ...mapGetters({
        user: 'user/user',
        tables: 'dictionary/tables'
      }),
      path () {
        console.log(this.$route.path)
        let path = this.$route.path.replace(/(^\/\w+)\/(\w+)/, '$1')
        return path
      }
    },
    mounted () {
    }
  }
</script>

<style lang="less">
  body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  }
  html {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #menu, body, html {
    // height: 100%;
    // overflow: hidden;
    background-color: #f8f8f8;
  }
  html, body {
    margin:0;
    padding:0;
  }
  .mr10 {
    margin-right: 10px;
  }
  .mr5 {
    margin-right: 5px;
  }
  .ml20 {
    margin-left: 20px;
  }
  .main-navbar {
    position: fixed;
    left: 0;
    right: 0;
    background:#ffffff;
    box-shadow:0 1px 4px 0 rgba(221,221,221,0.50);
    height:53px;
    z-index: 1000;
    .navbar-header {
      float: left;
      background:#ff9700;
      box-shadow:0 1px 4px 0 rgba(221,221,221,0.50);
      width:172px;
      height:53px;
      .heading-font {
        line-height: 50px;
        font-family:PingFangSC-Medium;
        font-size:16px;
        color:#ffffff;
        letter-spacing:0;
        text-align:justify;
      }
      .navbar-brand {
        display: block;
        width: 172px;
        height: 53px;
        text-decoration: none;
        float: left;
        font-size: 18px;
        line-height: 53px;
      }
    }
    .user-login {
      font-size:14px;
      color:#666666;
      letter-spacing:0;
      float: right;
      margin-right: 40px;
      line-height: 53px;
      .heading-exit {
        cursor: pointer;
        li {
          list-style: none;
          display: inline-block;
        }
      }
    }
    .search {
      float: right;
      position: relative;
      width: 343px;
      margin: 9px 25px;
      .search-icon {
        position: absolute;
        z-index: 100;
        left: 16px;
        top: 11px;
      }
      .microphone-icon {
        position: absolute;
        z-index: 100;
        right: 18px;
        top: 10px;
      }
      input {
        border: 0;
        margin-top: 3px;
        padding: 0 40px;
        border-radius: 18px;
        background:#f3f3f3;
        color: #414141;
        height: 30px;
      }
    }
    .el-menu {
      float: right;
      background-color: transparent;
      height: 53px;

      .img-circle {
        border-radius: 50%;
      }
      .header-avatar {
        width: 32px;
        height: 32px;
        vertical-align: middle;
      }
      .el-submenu {
        &:hover{
          background-color: #ff9700;
        }
      }
      .el-submenu__title {
        height: 50px;
        padding: 9px;
        line-height: 32px;
        border-bottom: 0!important;

        &:hover{
          border-bottom: 0!important;
          background-color: #ff9700;
        }
      }
    }
    .el-menu--horizontal .el-submenu > .el-menu {
      top: 55px;
      height: auto;
    }
  }
  .main-sidebar {
    position: fixed;
    width: 172px;
    left: 0;
    top: 53px;
    bottom: 0;
    padding: 20px 0;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 1000;
    background-color: #ffffff;
    -ms-overflow-style: none;  // IE 10+
    overflow: -moz-scrollbars-none;  // Firefox
    li {
      font-family:PingFangSC-Regular;
      font-size:14px;
      color:#666666;
      letter-spacing:0;
    }
    &&::-webkit-scrollbar {
      display: none;  // Safari and Chrome
    }

    .text-success {
      color: #5cb85c;
    }

    .menu-navbar {
      border-radius: 0;
      .el-menu-item, .el-submenu__title {
        height: 50px;
        line-height: 50px;
      }
    }

    .el-menu {
      background-color: #ffffff;
      width: 172px;
      font-size: 16px;

      .el-menu-item {
        text-align: left;
        color: #666666;
        &:hover {
          color: #1270be;
          background-color: #fffac9;
        }
        &.is-active {
          background-color: #ff9700 !important;
        }
        a {
          display: block;
          color: inherit;
          text-decoration: none;
          &:hover {
            color: inherit;
          }
        }
      }
      .el-submenu .el-menu {
        background-color: #525365;
        .el-menu-item {
          height: 33px;
          line-height: 33px;
          font-size: 12px;
        }
      }
      .el-submenu .el-menu .el-menu-item.is-active, .el-menu-item.is-active {
        color: #fff;
        background-color: #1582dc;
        &:hover {
          background-color: #1582dc;
        }
      }
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-to {
      opacity: 0
    }
  }
</style>
