<template>
<div>
  <UserHeader/>
  <div class="hosList">
    <el-card :body-style="{ padding: '10px' }" style="margin-bottom:30px">
      <el-container direction="vertical">
    <el-row>
      <el-col :span="6" ><div><img :src="hosPic" class="image"></div></el-col>
      <el-col :span="18" style="padding-left:20px">
        <div>
          <p style="font-size:20px;padding:5px;color:black;display:inline">{{hosName}}</p>
          <p style="font-size:16px;padding-left:20px;color:orange;display:inline">{{hosType}}</p>
        </div>
        <el-divider></el-divider>
        <div>
          <p style="line-height:30px;display:inline">地址: </p>
          <p style="line-height:30px;display:inline">{{hosPosition}}</p>
        </div>
        <div>
          <p style="line-height:30px;display:inline">电话: </p>
          <p style="line-height:30px;display:inline">{{hosTelephone}}</p>
        </div>
        <div>
          <p style="line-height:30px;display:inline">简介: </p>
          <p style="line-height:15px;display:inline">{{hosIntro}}</p>
        </div>
      </el-col>
    </el-row>
    </el-container>
  </el-card>

  <el-card :body-style="{ padding: '10px' }" style="margin-top:30px">
    <el-container direction="vertical">
    <el-row style="padding:5px">
      <el-col :span="24"><p style="font-size:20px;padding-left:20px;color:black;display:inline">挂号科室</p></el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row v-for="(deptMain, index) in deptList" :key="index">
      <el-col :span="5" style="padding-left:20px;font-size:16px"><p>{{deptMain.deptName}}</p></el-col>
      <el-col :span="19">
        <el-col :span="10" v-for="(dept, i) in deptList[index].deptList" :key="i">
          <el-link type="primary" style="margin:0px 60px 10px 60px" @click="JumptoDetail(dept.deptName)">{{dept.deptName}}</el-link>
        </el-col>
      </el-col>
      <hr style="border-width:0.1px;border-style:dashed;border-color:#DCDCDC;"/>
    </el-row>
    </el-container>
  </el-card>
</div>
</div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue'
// import axios from 'axios'
import {
  getDocDepartment
} from '../api/Search'
export default {
  components: { UserHeader },
  data () {
    return {
      info: null,
      hosPic: '',
      hosName: '',
      hosType: '',
      hosTelephone: '',
      hosPosition: '',
      hosIntro: '',
      deptList: [],
      currentPage: 0,
      docListAcc: [],
      totalPage: 0,
      docNum: 0
    }
  },
  mounted () {
    this.hosPic = this.$route.query.hosPic
    this.hosName = this.$route.query.hosName
    this.hosType = this.$route.query.hosType
    this.hosTelephone = this.$route.query.hosTelephone
    this.hosPosition = this.$route.query.hosPosition
    this.hosIntro = this.$route.query.hosIntro
    this.currentPage = 1
    this.showDepartment()
  },
  methods: {
    showDepartment () {
      getDocDepartment(this.hosName)
        .then((response) => {
          this.deptList = response.data[0].departmentList
          console.log(response.data[0])
        })
        .catch((error) => {
          console.log(error)
        })
    },
    JumptoDetail: function (e) {
      console.log('JumptoDetail')
      localStorage.setItem('search', '')
      this.$router.push({
        path: '/DoctorList',
        name: 'DoctorList',
        query: {
          hosName: this.hosName,
          deptName: e
        }
      })
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

  .el-divider--horizontal {
    margin: 12px 0;
  }
  .el-row {
    text-align: left;
    padding: 10px;
  }
  .hosList {
    padding-left:18%;
    padding-right:18%;
    padding-top:2%;
    padding-bottom:2%;
  }
  .image{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  .specialButton {
    background-color:#a93ed5;
    border-color:#a93ed5;
    margin:5px;
    padding:10px;
  }
  .icon {
    width: 15px;
    height: 15px;
    display: inline;
  }
  .button {
    margin:5px;
    padding:10px;
  }
  .el-button+.el-button {
    margin-left: 5px;
}
</style>
