<template>
  <div>
    <UserHeader/>
    <el-row>
      <Menu/>
      <el-col :span="16">
        <el-card :body-style="{ padding: '10px',height:'540px'}" style="margin:3% 30% 3% 5% ">
          <el-table :data="tableData" size="big" :cell-style="{textAlign:'center'}" :header-cell-style="{background:'#E7E2E2',color:'#363434',textAlign:'center'}" style="width: 100%">
            <el-table-column prop="date" label="预约时间"></el-table-column>
            <el-table-column prop="hospital" label="医院"></el-table-column>
            <el-table-column prop="depart" label="科室"></el-table-column>
            <el-table-column prop="actor" label="医生"></el-table-column>
            <el-table-column prop="money" label="金额"></el-table-column>
            <el-table-column prop="state" label="预约状态">
                <!-- <template slot-scope="scope">
                  <span style="color:#87A3D3" v-if="scope.row.state === 0">未就诊</span>
                  <span style="color:green" v-else-if="scope.row.state === 1">已就诊</span>
                  <span style="color:#D39287" v-else-if="scope.row.state === 2">待审核</span>
                  <span v-else>无数据</span>
                </template> -->
            </el-table-column>
            <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                  <el-button v-if="scope.row.state !== 1 " @click="handleCancle(scope.row)" type="text">取消订单</el-button>
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
import { present } from '../api/order'
export default {
  components: {
    UserHeader,
    Menu
  },
  data () {
    return {
      // table 的假数据
      tableData: []
    }
  },
  methods: {
    init () {
      present()
        .then((response) => {
          this.lists = response.appoint_list
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
</style>
