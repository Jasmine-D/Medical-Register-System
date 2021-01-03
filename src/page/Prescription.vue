<template>
  <div>
    <UserHeader/>
    <el-row>
      <Menu/>
      <el-col :span="16">
        <div id="preList" v-for="(item,index) in lists" :key="index">
          <el-card :body-style="{ padding: '10px',height:'510px'}" style="margin:3% 30% 3% 5% ">
            <div class="border">
              <p class="title">处方笺</p>
              <p class="s_title">时间：{{item.time}}</p>
              <p class="s_title">医院：{{item.hospital}}</p>
              <p class="s_title">科室：{{item.department}}</p>
              <p class="s_title">诊断：{{item.diagnosis}}</p>
              <el-divider></el-divider>
              <p class="Rp">Rp:</p>
              <div class="medicine">
                <el-table :data="item.medicine" size="big" :cell-style="{textAlign:'center'}" :header-cell-style="{textAlign:'center'}" >
                  <el-table-column prop="name" label="药品名称"></el-table-column>
                  <el-table-column prop="usage" label="用法用量"></el-table-column>
                </el-table>
              </div>
              <p class="doctor">医生：{{item.doctor}}</p>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue'
import Menu from '@/components/Menu.vue'
import { pres } from '../api/personal'

export default {
  components: {
    UserHeader,
    Menu
  },
  data () {
    return {
      // table 的假数据
      lists: []
    }
  },
  methods: {
    init () {
      pres()
        .then((response) => {
          this.lists = response.prescriptions
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped>
.border{
    padding: 0 20px;
}
.title{
  text-align: center;
  font-size: 20px;
  padding: 20px;
  font-weight: 600;
}
.s_title{
  padding:6px 20px;
}
.medicine{
  padding:20px 50px;
}
.Rp{
  font-family:'Times New Roman', Times, serif;
  font-weight: bold;
  font-size: 20px;
}
.doctor{
  float:right;
  padding:20px 50px;
}
</style>
