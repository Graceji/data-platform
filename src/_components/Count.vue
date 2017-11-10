<template>
  <div class="industry">
    <div class="enterprise">
            <span class="">
              {{firstText}}
            </span>
    </div>
    <div class="amount">
      <span class="count">{{count}}</span>
      <span>{{thirdText}}</span>
    </div >
  </div>
</template>

<script>
    export default {
      name: 'count',
      props: ['firstText', 'secondText', 'thirdText'],
      data () {
        return {
          count: 0
        }
      },
      methods: {
        clearTime (limit) {
          const time = setInterval(() => {
            this.count += 5
            if (this.count >= +limit) {
              this.count = +limit
              clearInterval(time)
            }
          })
        }
      },
      mounted () {
        this.clearTime(this.secondText)
      }
    }
</script>

<style lang="less">
  .industry {
    float: left;
    .enterprise {
      padding-top: 5px;
      color: #fff;
      width: 64px;
      border-top: 5px solid white;
    }
    .amount {
      color: #fff;
      .count {
        font-size: 52px;
        color: #68B9FD;
        font-family: Arial, Helvetica, sans-serif;
      }
      span {
        font-size: 27px;
      }
    }
  }
</style>
