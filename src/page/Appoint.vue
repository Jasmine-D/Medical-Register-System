<template>
  <div class="block">
    <!-- 导航区域 -->
    <UserHeader/>
    <div class="main">
      <el-col :span="24" class="bord">
        <el-card class="box-card" shadow="always">
            <p class="title">预约挂号</p>
            <div class="inpBox">
              <el-form :model="appointForm" :rules="rules" ref="appointForm" label-width="80px" class="demo-ruleForm">
                <el-form-item label="地区：" prop="region">
                  <el-input v-model="appointForm.region" placeholder="请输入地区" style="width: 85%;">
                  </el-input>
                </el-form-item>
                <el-form-item label="医院：" prop="hospital">
                  <el-input v-model="appointForm.hospital" placeholder="请输入医院" style="width: 85%;" >
                  </el-input>
                </el-form-item>
                <el-form-item label="科室：" prop="depart">
                  <el-input v-model="appointForm.depart" placeholder="请输入科室" style="width: 85%;">>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('appointForm')">预约挂号</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
    </div>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue'
import { search } from '../api/order'
export default {
  components: { UserHeader },
  data () {
    return {
      appointForm: {
        region: '',
        hospital: '',
        depart: ''
      },
      rules: {
        region: [
          { required: true, message: '请输入地区', trigger: 'blur' }
        ],
        hospital: [
          { required: true, message: '请输入医院', trigger: 'blur' }
        ],
        depart: [
          { required: true, message: '请输入科室', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 上海 医院C 泌尿科
          search(this.appointForm.region, this.appointForm.hospital, this.appointForm.depart)
            .then((response) => {
              // console.log(response)
              console.log(response.data[0].name)
            })
          console.log('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  .main{
    background: url(../assets/img/bannerbg.png);
    height: 600px;
  }
  .bord{
    padding: 100px 38%;
  }
  .box-card {
    width: 360px;
    height: 380px;
    border-radius: 10px;
  }
  .title{
    text-align: center;
    font-size:24px;
    padding-top: 20px;
    padding-bottom: 30px;
  }

  .el-button{
    margin:15px 0px 50px 40px;
  }

</style>
