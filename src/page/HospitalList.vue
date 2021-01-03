<template>
    <div style="margin:0 auto">
      <UserHeader @showPage="showPage"></UserHeader>
    <div style="padding:2% 18%">
      <p style="float:left">共搜索出</p>
      <p style="float:left">{{this.hosNum}}</p>
      <p style="float:left">家医院</p>
    </div>
    <el-row v-for="(hosInfo, index) in hosListInfo" :key="index">
      <el-col :span="24" class="hosList">
        <el-card :body-style="{ padding: '0px' }">
          <el-container direction="vertical">
            <el-row>
              <el-col :span="4"><div><img :src="hosInfo.hosPic" class="image"></div></el-col>
              <el-col :span="16" style="text-align:left">
                <div style="padding:15px 20px">
                    <p style="font-size:18px;color:black;display:inline">{{hosInfo.hosName}}</p>
                    <p style="font-size:15px;padding-left:20px;color:orange;display:inline">{{hosInfo.hosType}}</p>
                </div>
                <div>
                    <i class="el-icon-phone" style="display:inline;padding-left:20px"></i>
                    <p style="font-size:15px;color:gray;display:inline">{{hosInfo.telephone}}</p>
                </div>
                <div>
                    <i class="el-icon-location" style="display:inline;padding-left:20px"></i>
                    <p style="font-size:15px;color:gray;display:inline">{{hosInfo.position}}</p>
                </div>

              </el-col>
              <el-col :span="1"><el-divider direction="vertical" class="divider"></el-divider></el-col>
              <el-col :span="3"><div style="padding:25% 5% 25% 5%">
                <el-button type="primary" plain @click="$goRoute({name:'HospitalDetail'})">挂号</el-button>
              </div></el-col>
            </el-row>
          </el-container>
        </el-card>
      </el-col>
    </el-row>
    <div style="text-align:center">
      <el-pagination
        background
        :page-size="3"
        :current-page.sync="currentPage"
        :page-count="this.totalPage"
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue'

import {
  getHosList
} from '../api/Search'

export default {
  components: {
    UserHeader
  },
  // name: 'App',
  data () {
    return {
      hosListInfo: [],
      currentPage: 1,
      totalPage: 0,
      hosNum: 0,
      hosName: ''
    }
  },
  mounted () {
    this.showPage()
  },
  methods: {
    showPage () {
      this.hosName = localStorage.getItem('search')
      console.log('hosName', this.hosName)
      getHosList(this.hosName, 3, this.currentPage)
        .then((response) => {
          this.hosListInfo = response.data
          this.totalPage = response.totalPage
          this.hosNum = response.count
          console.log('hosNum', response.hosNum)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    handleCurrentChange (val) {
      this.currentPage = val
      console.log(`当前页: ${val}`)
      this.showPage()
    }
  }
}
</script>

<style scoped>
  .word{
    font-size:15px;
    line-height:30px;
    color:black;
    display:inline;
  }
  .divider {
    height:7.2em;
  }
  .hosList {
    padding-left:18%;
    padding-right:18%;
  }
  .el-row {
    text-align: center;
    padding: 10px;
  }
  .el-col {
    text-align: center;
  }
  .image{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  .el-divider--vertical {
    margin:0 0px;
  }
</style>
