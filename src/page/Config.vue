<template>
  <div>
    <!-- 导航区域 -->
    <UserHeader/>
    <div class="config">
      <el-card :body-style="{ padding: '15px' }" style="margin-bottom:40px">
        <div class="topInfo">
          <table>
            <colgroup><col width="43%"> <col width="16%"> <col width="32%"> <col class="last"></colgroup>
            <thead>
              <tr>
                <th><p>医生信息</p></th>
                <th><p>门诊类型</p></th>
                <th><p>就诊时间</p></th>
                <th><p>费用</p></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="docInfo"><img class="image" src="../assets/img/doc1.png" alt="张峰">
                    <dl>
                      <dt style="color:#2d8cf0;">{{form.doctor_name}}</dt>
                      <dd><p>{{form.hospital_name}}{{form.professional_title}}</p>
                          <p>{{form.department}}</p>
                      </dd>
                    </dl>
                  </div>
                </td>
                <td>&nbsp;{{form.professional_title}}</td>
                <td>{{form.date}}&nbsp;
                      <span v-if="form.time_slot === 1"> 上午</span>
                      <span v-else-if="form.time_slot === 2"> 下午</span>
                      <span v-else-if ="form.time_slot === 3"> 全天</span><br/></td>
                <td class="g-txt-orange">{{form.price}}元<br/>(挂号费）</td>
              </tr>
            </tbody>
          </table>
        </div>
      </el-card>
      <el-row :gutter="16" >
      <el-card :body-style="{ padding: '15px' }" style="margin-bottom:40px">
        <p class="title">填写疾病信息</p>
        <el-input type="textarea"
        :rows="2"
        placeholder="请输入疾病信息"
        v-model="form.details" maxlength="50"
        show-word-limit class="config-illMsg"
        required></el-input>
      </el-card>
      </el-row>
       <el-button type="success" round style="display:block;margin:0px auto" @click="handleConfig">确认预约</el-button>
    </div>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue'
import cookie from 'js-cookie'
import { config } from '../api/order'
export default {
  components: { UserHeader },
  data () {
    return {
      form: {
        date: '',
        hospital_name: '',
        doctor_name: '',
        department: '',
        time_slot: '', // parseInt
        professional_title: '',
        price: '',
        details: ' '
      }
    }
  },
  methods: {
    handleConfig () {
      config(this.form)
        .then((res) => {
          this.$message({
            message: '成功发送预约请求，等待后台处理',
            type: 'success'
          })
          this.$router.push({ path: '/order' })
        })
        .catch((error) => {
          console.log(error.status)
          if (cookie.get('token')) {
            this.$message({
              message: '服务器忙，请稍候再试',
              type: 'error'
            })
          }
        })
    },
    init () {
      this.form.date = this.$route.query.date
      this.form.hospital_name = this.$route.query.hospital_name
      this.form.doctor_name = this.$route.query.doctor_name
      this.form.department = this.$route.query.department
      this.form.time_slot = this.$route.query.time_slot
      this.form.professional_title = this.$route.query.professional_title
      this.form.price = this.$route.query.price
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped>
  .el-card{
    border-radius: 5px;
  }

  .el-row {
    text-align: left;
    padding: 10px;
  }

  .config {
    padding-left:20%;
    padding-right:20%;
    padding-top:1.5%;
  }

  .topInfo {
    margin-top: 10px;
  }

  .topInfo table{
    text-align: center;
    padding-left: 20px;
    font-size: 16px;
  }

  .topInfo table td {
    padding: 15px 2px 5px;
  }

  .docInfo{
    line-height: 24px;
  }

  .docInfo dl {
    margin-left: 80px;
    text-align: left;
  }

  .image{
    float: left;
    display: block;
    height: 60px;
    margin: 0 auto;
    max-width: 60px;
    border-radius: 30px;
  }

  .title{
    font-size: 18px;
    padding: 20px;
    text-align: center;
    font-weight:600;
  }

</style>
