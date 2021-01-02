<template>
  <div>
    <!-- 导航区域 -->
    <UserHeader/>
    <div class="config">
      <el-page-header @back="goBack" content="确认预约" style="padding-bottom:20px">
      </el-page-header>
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
                      <dt><span style="color:#2d8cf0;">张峰</span> 主任医师</dt>
                      <dd><p>复旦大学附属中山医院高级专家门诊</p>
                          <p>心内科</p>
                      </dd>
                    </dl>
                  </div>
                </td>
                <td>高级专家门诊</td>
                <td>2021年01月04日&nbsp;上午<br/></td>
                <td class="g-txt-orange">400.00元<br/>(挂号费）</td>
              </tr>
            </tbody>
          </table>
        </div>
      </el-card>
      <el-row :gutter="16" >
      <el-card :body-style="{ padding: '15px' }" style="margin-bottom:40px">
        <p class="title">填写疾病信息</p>
        <el-input type="textarea" :rows="2" placeholder="请输入疾病信息" v-model="textarea" maxlength="50" show-word-limit class="config-illMsg"></el-input>
      </el-card>
      </el-row>
       <el-button type="success" round style="display:block;margin:0px auto" @click="handleConfig">确认预约</el-button>
    </div>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue'
export default {
  components: { UserHeader },
  data () {
    return {
      textarea: ''
    }
  },
  methods: {
    goBack () {
      console.log('go back')
    },
    handleConfig () {
      this.$message({
        message: '成功发送预约请求，等待后台处理',
        type: 'success'
      })
      this.$router.push({ path: '/order' })
      this.$message({
        message: '服务器忙，请稍后再试',
        type: 'warning'
      })
    }
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
