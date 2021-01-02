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
                  <el-select v-model="appointForm.region" placeholder="请选择地区" @change="updateHospital" style="width: 85%;">
                      <el-option v-for="item in cityArr" :key="item.name" :label="item.name" :value="item.name">
                      </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="医院：" prop="hospital">
                  <el-select v-model="appointForm.hospital" placeholder="请选择医院" @change="updateDepart" style="width: 85%;" >
                    <el-option v-for="item in hosArr" :key="item.name" :label="item.name" :value="item.name">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="科室：" prop="depart">
                  <el-select v-model="appointForm.depart" placeholder="请选择科室" style="width: 85%;">>
                    <el-option v-for="item in depArr" :key="item.name" label="item.name" :value="item.name">
                      </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('appointForm')">登录</el-button>
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
import axios from 'axios'
export default {
  components: { UserHeader },
  data () {
    return {
      appointForm: {
        mapJson: '/map.json',
        region: [],
        hospital: [],
        depart: []
      },
      rules: {
        region: [
          { required: true, message: '请选择地区', trigger: 'change' }
        ],
        hospital: [
          { required: true, message: '请选择医院', trigger: 'change' }
        ],
        depart: [
          { required: true, message: '请选择科室', trigger: 'change' }
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
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    getAllData: function () {
      var that = this
      axios
        .get(this.mapJson)
        .then(function (response) {
          if (response.status === 200) {
            that.arr = response.data
            that.updateCity()
            that.updateDistrict()
          } else {
            console.log(response.status)
          }
        })
    },
    // 加载地区医院科室数据，三级
    updateHospital: function () {
      for (var i in this.cityArr) {
        var obj = this.cityArr[i]
        if (obj.name === this.addressForm.city) {
          this.hosArr = obj.sub
          break
        }
      }
      this.addressForm.hospital = this.hosArr[0].name
      this.updateDistrict()
    },
    updateDistrict: function () {
      for (var i in this.hosArr) {
        var obj = this.hosArr[i]
        if (obj.name === this.addressForm.hospital) {
          this.depArr = obj.sub
          break
        }
      }
      if (this.depArr && this.depArr.length > 0 && this.depArr[0].name) {
        this.addressForm.depart = this.depArr[0].name
      } else {
        this.addressForm.depart = ''
      }
    },
    // 页面初始化方法
    created () {
      this.getAllData()
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
    width: 370px;
    height: 370px;
    border-radius: 10px;
  }
  .title{
    text-align: center;
    font-size:24px;
    padding-top: 20px;
    padding-bottom: 30px;
  }

  .el-button{
    margin:15px 0px 30px 60px;
  }

</style>
