<template>
    <div class="login_container">
      <el-container>
          <el-header height="110px">
            <div class="logo">
              <img src="..\assets\img\logo.png" style="cursor:pointer" @click="goHome"/>
              <p>欢迎注册</p>
              <span class="golog">已有账号？<el-link type="danger"  @click="goLog">请登录</el-link></span>
            </div>
          </el-header>
          <el-main >
            <p>账号注册</p>
              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="98px" class="regIndent" >
                <div class="inpBox" >
                <el-form-item label="请输入手机号" prop="phone" >
                  <el-input  v-model ="ruleForm.phone" ></el-input >
                </el-form-item>
                </div>
                <div class="inpBox">
                <el-form-item label="设置密码" prop="pass">
                  <el-input type="password" placeholder="8~24位数字/字母" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                </div>
                <div class="inpBox">
                <el-form-item label="确认密码" prop="checkPass">
                  <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                </div>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
          </el-main>
      </el-container>
    </div>
</template>

<script>
import { isValidPhone, isValidPwd } from '../config/validate'
import { register } from '../api/register'
// import { login } from '../api/login'

export default {
  data () {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      } else {
        if (isValidPhone(value)) {
          callback()
        } else {
          return callback(new Error('请输入正确的手机号'))
        }
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (isValidPwd(value) && value.length >= 8 && value.length <= 24) {
          callback()
        } else {
          return callback(new Error('请输入正确的密码格式'))
        }
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        phone: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        phone: [
          { validator: checkPhone, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // login(this.ruleForm.phone, this.ruleForm.pass)
          register(this.ruleForm.phone, this.ruleForm.pass)
          // alert('注册成功，前往登录界面')
          // this.$router.push({ path: '/login' })
        } else {
          alert('请输入正确的信息格式')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    goHome () {
      this.$router.push({ path: '/home' })
    },
    goLog () {
      this.$router.push({ path: '/login' })
    }
  }
}

</script>

<style scoped>
  .el-container{
    background-color:rgb(167, 224, 247);
    background-image:url(../assets/img/rebg.png);
  }

  .login_container
  {
      background:#fff;
  }

 .el-header {
    background-color: #fff;
    color: #333;
    line-height: 40px;
  }

  .logo{
    height: 100px;
  }

  .logo img{
    display: inline-block;
    height: 72px;
    width: 90px;
    position: absolute;
    top:20px;
    left: 175px;
  }

  .logo p{
    font-size: 28px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    position: absolute;
    top:30px;
    left: 300px;
  }

  .golog{
    float: right;
    padding-right: 250px;
    padding-top: 30px;
  }

  .el-link{
    vertical-align: top;
  }

  .el-main {
    background-color:#fff;
    color: #333;
    text-align: center;
    line-height: 50px;
    margin: 70px auto 80px auto;
    border-radius: 10px;
    height:500px;
  }

  .el-main p{
    font-size: 30px;
    padding-bottom:20px ;
    padding-top:20px ;
  }

  .inpBox{
    padding:15px 0;
    height: 60px;
    width: 370px;
  }

  .el-input {
    height: 50px;
    width: 250px;
    border: none;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    }

  .el-button{
    margin-top:20px;
    margin-left: -10px;
    margin-right: 30px;
  }

</style>
