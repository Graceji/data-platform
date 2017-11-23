<template>
  <div class="feedback">
    <div class="feedback-status">
      <img :src="success" alt="反馈成功">
      <span class="note">非常感谢您的反馈，我们会及时查看和处理！</span>
    </div>
    <div class="feedback-btns">
      <button class="btn btn-white">完成反馈</button>
      <button class="btn btn-orange" @click="continueTo">继续反馈</button>
    </div>
  </div>
</template>

<script>
  import success from '../../assets/success.png'
  export default {
    data () {
      return {
        success
      }
    },
    methods: {
      continueTo () {
        this.$router.push('/menu/feedback')
      }
    }
  }
</script>

<style lang="scss">
  .feedback {
    background: #fff;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .feedback-status {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 47px;
      margin-top: 197px;
      .note {
        font-size:16px;
        color:#333;
        margin-left: 29px;
      }
    }
    .btn {
      font-size: 14px;
      color: #fff;
      border: 1px solid #ff9700;
      width: 118px;
      height: 32px;
      outline: none;
    }
    .btn-orange {
      background: #ff9700;
    }
    .btn-white {
      background: #fff;
      color:#ff9700;
      margin-right: 40px;
    }
  }
</style>
