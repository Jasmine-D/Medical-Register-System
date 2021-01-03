<template>
  <div>
    <UserHeader/>
    <el-row>
      <Menu/>
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue'
import Menu from '@/components/Menu.vue'
export default {
  components: { UserHeader, Menu },
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

    return {
      input: '',
      ruleForm: {
        oldPassword: '',
        newPassword_1: '',
        newPassword_2: ''
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
    }
  }
}
</script>

<style scoped lang="scss">

</style>
