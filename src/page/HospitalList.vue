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
        <HosList
          :hosPic="hosInfo.hosPic"
          :hosName="hosInfo.hosName"
          :hosType="hosInfo.hosType"
          :hosTelephone="hosInfo.telephone"
          :hosPosition="hosInfo.position"
          :hosIntro="hosInfo.hosIntro"
        >
        </HosList>
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
import HosList from '@/components/HosList.vue'
import {
  getHosList
} from '../api/Search'

export default {
  components: {
    UserHeader,
    HosList
  },
  data () {
    return {
      hosListInfo: [],
      currentPage: 0,
      totalPage: 0,
      hosNum: 0,
      hosName: ''
    }
  },
  mounted () {
    this.currentPage = 1
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
          console.log(response.totalPage)
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
