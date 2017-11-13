<template>
  <div id="feedback">
    <div class="feedback-item">
      <span class="title">1. 你想针对数据的哪方面提出反馈：</span>
    </div>
    <div class="feedback-content1">
      <el-button
        type="warning"
        class="btn"
        v-for="(item, index) in feedbackItems"
        :key="index"
        :class="{ 'btn-orange': item.isSelect }"
        @click="selectItem(index)"
      >
        {{ item.title }}
      </el-button>
    </div>
    <div class="feedback-item">
      <span class="title">2. 我们具体在什么地方表现的不足：</span>
      <span class="subtitle">（如果设计具体的表名，可在里面填写）</span>
      <span>建议内容不能为空！</span>
    </div>
    <div class="feedback-content2">
      <el-input
        class="feedback-textarea"
        type="textarea"
        resize="none"
        placeholder="请将您的反馈和遇到的问题详细告诉我们，我们会认真对待并不断优化和改善"
        v-model="feedbackContent"
        maxlength="300"
        >
      </el-input>
    </div>
    <div class="feedback-item">
      <span class="title">3. 如需图片和其他文件来说明问题，请上传：</span>
      <span class="subtitle">（最多支持3份）</span>
    </div>
    <div class="feedback-content3">
      <el-upload
        class="feedback-upload"
        action=""
        :on-success="handleSuccess"
        :before-upload="beforeUpload"
        :file-list="fileList"
        :on-remove="handleRemove"
        :on-preview="handlePreview"
        :on-error="handleError">
        <i class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <div class="feedback-submit">
      <el-button type="warning" @click="openConfirm">提交</el-button>
    </div>
    <div class="feedback-footer">
      人工服务：2901034820
    </div>
  </div>
</template>

<script>
export default {
  name: 'feedback',
  data () {
    return {
      feedbackItems: [
        {
          title: '数据错误',
          isSelect: false
        },
        {
          title: '字段类型错误',
          isSelect: false
        },
        {
          title: '数据更新不及时',
          isSelect: false
        },
        {
          title: '数据缺失',
          isSelect: false
        },
        {
          title: '其他改进意见',
          isSelect: false
        }
      ],
      feedbackContent: '',
      fileList: []
    }
  },
  methods: {
    selectItem (index) {
      // 只能单选
      this.feedbackItems.forEach(item => { item.isSelect = false })
      this.feedbackItems[index].isSelect = !this.feedbackItems[index].isSelect
    },
    openConfirm () {
      const h = this.$createElement
      this.$msgbox({
        title: '',
        message: h('p', null, [
          h('span', null, '您是否提交当前的反馈信息？')
        ]),
        showCancelButton: true,
        confirmButtonText: '确认反馈',
        cancelButtonText: '再考虑下',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 3000)
          } else {
            done()
          }
        }
      })
        .then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          })
        })
    },
    handleError (err, file, fileList) {
      console.log(err)
      console.log(file)
    }
  }
}
</script>

<style lang="scss">
#feedback {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  margin: 20px;
  height: 88%;
  padding: 28px;
  overflow: scroll;
  .feedback-item {
    color: #333;
    margin-bottom: 18px;
    .title {
      font-size: 16px;
    }
  }
  .feedback-content1 {
    margin-bottom: 40px;
    .btn {
      background: #ffffff;
      border: 1px solid #ff9700;
      width: 178px;
      height: 38px;
      border-radius: 0;
      font-size: 14px;
      color: #ff9700;
    }
    .btn-orange {
      background-color: #ff9700;
      color: #fff;
    }
  }
  .feedback-content2 {
    margin-bottom: 40px;
    width: 100%;
    .el-textarea__inner {
      height: 148px;
      &:focus {
        border-color: #ff9700;
      }
    }
  }
  .feedback-content3 {
    margin-bottom: 40px;
    text-align: left;
    .feedback-upload .el-upload {
      border: 1px solid #ebebeb;
      background-color: #f7f7f7;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      width: 103px;
      height: 103px;
    }
    .feedback-upload .el-upload:hover {
      border-color: #20a0ff;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 103px;
      height: 103px;
      line-height: 103px;
      text-align: center;
      &::before {
        position: absolute;
        top: -12px;
        left: 38px;
      }
      &::after {
        content: '添加文件';
        display: block;
        height: 10px;
        position: absolute;
        top: 25px;
        left: 28px;
        font-size: 12px;
      }
    }
    .avatar {
      width: 103px;
      height: 103px;
      display: block;
    }
  }
  .feedback-submit {
    width: 100%;
    margin-bottom: 300px;
    .el-button {
      background:#ff9700;
      border:1px solid #ff9700;
      width:138px;
      height:38px;
      border-radius: 0;
      font-size: 14px;
    }
  }
  .feedback-footer {
    width: 100%;
    font-size:14px;
    color:#999999;
    letter-spacing:0;
  }
}
</style>
