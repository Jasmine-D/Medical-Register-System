<template>
    <div class="login_container">
      <el-container>
        <el-aside width="60%">
            <div style="padding-left:20px">
                <img class ="backImg" src="..\assets\img\bigImg.png">
            </div>
        </el-aside>
        <el-main>
            <div class="login_box">
                <!--选择身份-->
                <h2 class="title">账号登录</h2>
                <el-form :model="ruleForm"  :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item style="margin-left:-80px" prop="resource">
                </el-form-item>
                  <el-form-item label="账号：" prop="account">
                    <el-input  v-model="ruleForm.account" autocomplete="off" clearable >
                    </el-input>
                  </el-form-item>
                  <el-form-item label="密码：" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off" show-password clearable></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                  </el-form-item>
                </el-form>
                <div><el-link type="danger"  @click="goReg">没有账号，去注册</el-link></div>
            </div>
        </el-main>
      </el-container>
    </div>
</template>

<script>
import { isValidPhone } from '../config/validate'
import { login } from '../api/login'
import cookie from 'js-cookie'

export default {
  data () {
    var validateAccount = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('账号不能为空'))
      } else {
        if (isValidPhone(value)) {
          callback()
        } else {
          return callback(new Error('请输入正确的手机号'))
        }
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [{
          validator: validateAccount,
          trigger: 'blur'
        }],
        password: [{
          validator: validatePassword,
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    async submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        // var token
        if (valid) {
          login({
            id: this.ruleForm.account,
            password: this.ruleForm.password
          })
            .then((response) => {
              cookie.set('id', this.ruleForm.account)
              this.$message({
                message: '登录成功',
                type: 'success'
              })
              this.$router.push({ path: '/home' })
            })
            .catch((error) => {
              if (error.status) {
                this.$message({
                  message: '登录失败',
                  type: 'error'
                })
              }
            })
        }
      })
    },
    goReg () {
      this.$router.push({ path: '/register' })
    }
  }
}

</script>
<style scoped>
  .el-aside {
    background-color: #bfe5fa;
    color: #333;
    text-align: center;
    line-height: 100px;
    width:40%;
  }

  .el-main {
    background-color:#bfe5fa;
    color: #333;
    width:40%;
    text-align: center;
    line-height: 20px;
  }

  .login_box{
    width: 350px;
    height: 370px;
    background: #ffffff;
    border: 1px solid #eeebeb;
    border-radius: 20px;
    left: 50%;
    top: 0;
    transform: translate(45%,50%);
  }

  .login_container
  {
    background:#bfe5fa
  }

  .backImg{
    padding-top: 60px;
    padding-left: 50px;
    width: 750px;
    height: 650px;
  }

  .title{
    padding-top: 40px;
    padding-bottom: 30px;
  }

  .el-input {
    height: 50px;
    width: 200px;
    border: none;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    padding-right: 50px;
  }

  .el-button{
    margin-left:-85px;
  }

  .el-link{
    padding-left: 10px;
  }

</style>
