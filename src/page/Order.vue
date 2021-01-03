<template>
  <div>
    <UserHeader/>
    <el-row>
      <Menu/>
      <el-col :span="16">
        <el-card :body-style="{ padding: '10px',height:'800px'}" style="margin:3% 28% 3% 5% ">
          <el-table :data="lists" size="big" :cell-style="{textAlign:'center'}" :header-cell-style="{background:'#E7E2E2',color:'#363434',textAlign:'center'}" style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="预约时间：">
                    <span>{{ props.row.date }} </span>
                      <span v-if="props.row.time_slot === 1"> 上午</span>
                      <span v-else-if="props.row.time_slot === 2"> 下午</span>
                      <span v-else> 全天</span>
                  </el-form-item>
                  <el-form-item label="金额：">
                    <span>{{ props.row.price }}元</span>
                  </el-form-item>
                  <el-form-item label="门诊类型：">
                    <span>{{ props.row.professional_title }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column prop="date" label="预约时间"></el-table-column>
            <el-table-column prop="hospital_name" label="医院"></el-table-column>
            <el-table-column prop="department" label="科室"></el-table-column>
            <el-table-column prop="name" label="医生"></el-table-column>
            <el-table-column prop="status" label="预约状态">
                <template slot-scope="scope">
                  <span style="color:green" v-if="scope.row.time_slot === '申请成功'">申请成功</span>
                  <span style="color:#87A3D3" v-else-if="scope.row.status === '已就诊'">已就诊</span>
                  <span style="color:#D39287" v-else-if="scope.row.status === '取消中' ">取消中</span>
                  <span style="color:#D39287" v-else-if="scope.row.status === '申请中' ">申请中</span>
                  <span v-else>无数据</span>
                </template>
            </el-table-column>
            <el-table-column prop="id" label="编号" v-if="show"></el-table-column>
            <el-table-column prop="time_slot" label="编号" v-if="show"></el-table-column>
            <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                  <el-button v-if="scope.row.status === '申请中' || scope.row.status === '申请成功' " @click="handleCancle(scope.row.id)" type="text">取消订单</el-button>
                </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue'
import Menu from '@/components/Menu.vue'
import { present, cancel } from '../api/order'
export default {
  components: {
    UserHeader,
    Menu
  },
  data () {
    return {
      show: false,
      // table 的假数据
      lists: []
    }
  },
  methods: {
    init () {
      present()
        .then((response) => {
          this.lists = response.appoint_list
          // console.log(response.appoint_list)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    handleCancle (id) {
      // console.log(id)
      cancel(id)
        .then((response) => {
          present()
            .then((res) => {
              this.lists = res.appoint_list
              // console.log(res.appoint_list)
            })
            .catch((error) => {
              console.log(error)
            })
        })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped>
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
    margin-bottom:100px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
