<template>
  <div id="login">
    <!--<ul class="carousel" ref="carousel">-->
      <!--<li><img src="../assets/login.png" alt=""></li>-->
      <!--<li><img src="../assets/login.png" alt=""></li>-->
      <!--<li><img src="../assets/login.png" alt=""></li>-->
      <!--<li><img src="../assets/login.png" alt=""></li>-->
      <!--<li><img src="../assets/login.png" alt=""></li>-->
    <!--</ul>-->
    <div class="login-box" ref="login">
      <div class="title">
        用户登录
      </div>
      <el-form :model="login" :rules="loginRules" class="login_form" ref="loginForm">
        <el-form-item prop="username">
          <el-input v-model="login.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="login.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="large" @click="submitForm('loginForm')">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import $ from 'jquery'
  
  export default {
    name: 'login',
    data () {
      return {
        labelPosition: 'right',
        login: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
        opts: {
          start: 0,
          dir: 'v',
          duration: 500,
          beforeChange () {

          },
          afterChange () {

          }
        }
      }
    },
    computed: {
      ...mapGetters({
        user: 'user/user'
      })
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch('user/getUser', {
              ...this.login
            }).then((data) => {
              if (data.loginstatus === 'success') {
                sessionStorage.setItem('username', this.user.username)
                sessionStorage.setItem('userid', this.user.userid)
                if (this.$route.query.redirect) {
                  let redirect = this.$route.query.redirect
                  this.$router.push(redirect)
                } else {
                  this.$router.push('/menu/home')
                }
              }
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    },
    mounted () {
      setTimeout(() => {
        $(this.$refs.login).addClass('active')
      }, 300)
    }
  }
</script>

<style lang="less">
 #login {
   background: url("../assets/login.png");
   background-size: 100% 100%;
   position: relative;
   height: 100%;
   width: 100%;
   overflow: hidden;
   .carousel {
     position: relative;
     list-style: none;
     padding: 0;
     margin: 0;
     li {
       float: left;
       padding: 0;
       margin: 0;
     }
   }
   .login-box {
     width: 260px;
     height: 285px;
     background:#ffffff;
     opacity: 0;
     box-shadow:0 0 48px 12px #f97e4c;
     border-radius:6px;
     position: absolute;
     top: 52%;
     right: -3%;
     transform: translate(-50%,-50%);
     transition: opacity 1s ease-in-out;
     padding: 20px 50px;
     z-index: 2;
     &.active {
       opacity: 1;
     }
     .login_form {
       .el-input {
         border:1px solid #dee1e8;
         border-radius:3px;
         background: rgba(255, 255, 255, 0.79);
       }
       .el-input__inner {
         height: 35px;
         border-radius: 0;
         background: rgba(255, 255, 255, 0.79);
       }
       .el-button {
         width: 260px;
         height: 35px;
         background:#ffe16c;
         border: 1px solid #ffe16c;
         border-radius:6px;
         font-family:PingFangSC-Medium;
         color:#ec7e28;
         letter-spacing:0;
       }
       .el-button--large {
         padding: 0px 19px;
       }
     }
     .title {
       text-align: center;
       font-size: 22px;
       line-height: 30px;
       margin: 20px 30px 30px;
       font-family:PingFangSC-Medium;
       color:#666666;
       letter-spacing:0;
     }
   }
 }

</style>
