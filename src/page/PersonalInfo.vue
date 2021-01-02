<template>
  <div>
    <UserHeader/>
    <el-row>
      <el-col :span="8">
        <el-card :body-style="{ padding: '10px'}" style="margin-left:50%; margin-top:6%">
          <div id="bgImg">
            <div style="margin:0px 15px 0px 15px;text-align:center">
              <img src="../assets/img/doc1.png" class="image">
              <p>用户名</p>
              <br/><br/><br/><br/>
            </div>
          </div>
          <el-menu
            default-active="2"
            class="el-menu-vertical"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="1" style="text-align:center">
              <i class="el-icon-menu"></i>
              <span slot="title">我的预约</span>
            </el-menu-item>
            <el-menu-item index="2" style="text-align:center">
              <i class="el-icon-setting"></i>
              <span slot="title">账号设置</span>
            </el-menu-item>
          </el-menu>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card :body-style="{ padding: '10px'}" style="margin:3% 30% 0% 5%">
          <el-col :span="5" style="text-align:center">
            <i class="el-icon-setting" style="font-size:30px"></i>
            <p style="font-size:15px">更改密码</p>
            <br/>
          </el-col>
          <el-col :span="19" style="padding:10px">
            <el-form ref="ruleForm" :model="ruleForm" label-width="100px" status-icon :rules="rules">
              <el-form-item label="当前密码：" prop="oldPassword">
                <el-input
                  type="password"
                  placeholder="请输入当前密码"
                  v-model="ruleForm.oldPassword"
                  autocomplete="off">
                </el-input>
              </el-form-item>
              <el-form-item label="新密码：" prop="newPassword_1">
                <el-input
                  type="password"
                  placeholder="请输入新密码"
                  v-model="ruleForm.newPassword_1"
                  autocomplete="off">
                </el-input>
              </el-form-item>
              <el-form-item label="确认新密码：" prop="newPassword_2">
                <el-input
                  type="password"
                  placeholder="请再次输入新密码"
                  v-model="ruleForm.newPassword_2"
                  autocomplete="off">
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-card>
        <el-card :body-style="{ padding: '10px'}" style="margin:3% 30% 0% 5%">
          <el-col :span="5" style="text-align:center">
            <i class="el-icon-user" style="font-size:30px"></i>
            <p style="font-size:15px">更改手机号</p>
            <br/>
          </el-col>
          <el-col :span="19" style="padding:10px">
            <el-form ref="Form" :model="Form" label-width="100px" status-icon :rules="rules">
              <el-form-item label="当前手机号：">
                <div style="line-height:40px">{{Form.oldPhone}}</div>
              </el-form-item>
              <el-form-item label="新手机号：" prop="newPhone">
                <el-input
                  placeholder="请输入新手机号"
                  v-model.number="Form.newPhone">
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="resetForm('Form')">重置</el-button>
                <el-button type="primary" @click="submitForm('Form')">提交</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-card>
        <el-card :body-style="{ padding: '10px'}" style="margin:3% 30% 3% 5%">
          <el-col :span="5" style="text-align:center">
            <i class="el-icon-star-off" style="font-size:30px"></i>
            <p style="font-size:15px">更改头像</p>
            <br/>
          </el-col>
          <el-col :span="19" style="padding:10px">
            <el-form ref="form" :model="form" label-width="100px">
              <el-form-item label="上传头像：">
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  drag
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">可拖拽上传，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-form-item>
              <el-form-item>
                <el-button>取消</el-button>
                <el-button type="primary">上传</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue'
export default {
  components: { UserHeader },
  // name: 'App',
  data () {
    var validateOldPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入旧密码'))
      } else {
        callback()
      }
    }
    var validatePass1 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'))
      } else {
        if (this.ruleForm.newPassword_2 !== '') {
          this.$refs.ruleForm.validateField('newPassword_2')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入新密码'))
      } else if (value !== this.ruleForm.newPassword_1) {
        callback(new Error('两次输入新密码不一致!'))
      } else {
        callback()
      }
    }
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 10000000000) {
            callback(new Error('手机号必须为11位'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    return {
      input: '',
      imageUrl: '',
      ruleForm: {
        oldPassword: '',
        newPassword_1: '',
        newPassword_2: ''
      },
      Form: {
        oldPhone: '11111111111',
        newPhone: ''
      },
      rules: {
        oldPassword: [
          { validator: validateOldPass, trigger: 'blur' }
        ],
        newPassword_1: [
          { validator: validatePass1, trigger: 'blur' }
        ],
        newPassword_2: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        newPhone: [
          { validator: checkPhone, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          alert('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPEG = file.type === 'image/jpeg'
      const isJPG = file.type === 'image/jpg'
      const isPNG = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPEG && !isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是JPEG/JPG/PNG格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return (isJPG || isJPG || isPNG) && isLt2M
    }
  }
}
</script>

<style scoped lang="scss">
  .image{
    width: 100px;
    height: 100px;
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
    margin-top:20px;
  }
  #bgImg{
    background:url("../assets/img/userBg.png") no-repeat center 0px;
    background-size:100%;
  }
  .el-menu{
    border-right: solid 0px #e6e6e6;
  }
  .el-menu-vertical{
    margin-bottom:400px;
  }
  .input-suffix{
    display:inline;
  }
  /*上传头像*/
  .el-upload {
    /*border: 1px dashed #d9d9d9;*/
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .upload-demo {
    width:180px;
    height:180px;
  }
  /deep/.el-upload-dragger {
    width:180px;
    height:180px;
  }
  .el-upload:hover {
    border-color: #409EFF;
  }
  /*
  .avatar-uploader-icon {
    font-size: 15px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }*/
  /deep/.el-form-item__content {
    line-height: 15px;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
