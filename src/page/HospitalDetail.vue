<template>
<div>
  <UserHeader/>
  <div class="hosList">
    <el-card :body-style="{ padding: '10px' }" style="margin-bottom:30px">
      <el-container direction="vertical">
    <el-row>
      <el-col :span="6" ><div><img src="../assets/img/hospital.png" class="image"></div></el-col>
      <el-col :span="18" style="padding-left:20px">
        <div>
          <p style="font-size:20px;padding:5px;color:black;display:inline">上海交通大学医学院附属瑞金医院</p>
          <p style="font-size:16px;padding-left:20px;color:orange;display:inline">三级甲等</p>
        </div>
        <el-divider></el-divider>
        <div>
          <p style="line-height:30px;display:inline">地址: </p>
          <p style="line-height:30px;display:inline">上海市黄浦区瑞金二路197号</p>
        </div>
        <div>
          <p style="line-height:30px;display:inline">电话: </p>
          <p style="line-height:30px;display:inline">021-64370045</p>
        </div>
        <div>
          <p style="line-height:30px;display:inline">简介: </p>
          <p style="line-height:15px;display:inline">上海交通大学医学院附属瑞金医院(上海瑞金医院)建于1907年，原名广慈医院，是一所三级甲等大型综合性教学医院。</p>
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
    <el-row v-for="(o, index) in 3" :key="o" :offset="index> 0 ? 3 : 0">
      <el-col :span="5" style="padding-left:15px;font-size:16px"><p>特色科室</p></el-col>
      <el-col :span="19">
        <el-link type="primary" style="margin:0px 60px 10px 60px">门诊肾脏</el-link>
        <el-link type="primary" style="margin:0px 60px 10px 60px">门诊血液</el-link>
        <el-link type="primary" style="margin:0px 60px 10px 60px">门诊内分泌</el-link>
        <el-link type="primary" style="margin:0px 60px 10px 60px">门诊肾脏</el-link>
        <el-link type="primary" style="margin:0px 60px 10px 60px">门诊血液</el-link>
        <el-link type="primary" style="margin:0px 60px 10px 60px">门诊内分泌</el-link>
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
export default {
  components: { UserHeader },
  data () {
    return {
      info: null
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
