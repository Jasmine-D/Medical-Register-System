<template>
<div>
  <UserHeader/>
  <div class="docList">
    <el-card :body-style="{ padding: '10px' }" style="margin-bottom:30px">
      <el-container direction="vertical">
        <el-row>
          <el-col :span="5" ><div><img src="../assets/img/doc1.png" class="image"></div></el-col>
          <el-col :span="18" style="padding-left:20px">
            <div>
              <p style="font-size:20px;padding:5px;color:orange;display:inline">王医生</p>
              <p class="word">主任医师</p>
            </div>
            <div>
              <p class="word">解放军总医院第五医学中心</p>
              <p class="word">---</p>
              <p class="word">血液内科</p>
            </div>
            <el-divider></el-divider>
            <div>
              <p style="line-height:30px;display:inline">擅长: </p>
              <p style="line-height:30px;display:inline">血液病和放射病，造血干细胞移植诊治。</p>
            </div>
            <div>
              <p style="line-height:20px;display:inline">简介: </p>
              <p style="line-height:20px;display:inline">王医生，男，副主任医师，医学硕士，血液内科，专业：血液病，长期从事各种血液病、
    辐射损伤的临床和基础研究，在白血病和非清髓异基因造血干细胞移植治疗血液病和辐射损伤
    方面有丰富的临床经验。</p>
            </div>
          </el-col>
        </el-row>
      </el-container>
    </el-card>

    <el-card :body-style="{ padding: '10px' }" style="margin-top:30px">
      <el-container direction="vertical">
        <el-row>
          <el-col :span="18">
            <p style="font-size:20px;padding:5px;color:black;display:inline">预约挂号</p>
            <el-button icon="el-icon-refresh-left" size="medium" circle @click="$goRoute({name:'DoctorDetail'})"></el-button>
            <el-divider></el-divider>
            <div>
              <p class="word">医院：</p>
              <p class="word">解放军总医院第五医学中心</p>
            </div>
            <div>
              <p class="word">科室：</p>
              <p class="word">血液内科</p>
            </div>
            <div>
              <p class="word">排班：</p>
              <img src="../assets/img/blueCircle.png" class="icon">
              <p class="word">专家门诊</p>
              <img src="../assets/img/greenCircle.png" class="icon">
              <p class="word">普通门诊</p>
              <img src="../assets/img/purpleCircle.png" class="icon">
              <p class="word">特需门诊</p>
              <img src="../assets/img/greyCircle.png" class="icon">
              <p class="word">不可约</p>
            </div>
            <div style="padding-left:45px">
                <el-button type="info" size="medium" round disabled class="button">
                  <p style="display:inline">12/01</p>
                  <p style="display:inline">周二</p>
                  <p style="display:inline">上午</p>
                </el-button>
                <el-button type="primary" size="medium" round class="button">
                  <p style="display:inline">12/02</p>
                  <p style="display:inline">周三</p>
                  <p style="display:inline">下午</p>
                </el-button>
                <el-button type="success" size="medium" round class="button">
                  <p style="display:inline">12/03</p>
                  <p style="display:inline">周四</p>
                  <p style="display:inline">下午</p>
                </el-button>
                <el-button type="warning" size="medium" round class="specialButton">
                  <p style="display:inline">12/04</p>
                  <p style="display:inline">周五</p>
                  <p style="display:inline">上午</p>
                </el-button>
            </div>
          </el-col>
          <el-col :span="1"><el-divider direction="vertical" class="divider"></el-divider></el-col>
          <el-col :span="5">
            <p style="line-height:40px">预约规则：</p>
            <p style="line-height:20px">预约后用户可以在我的预约页面查看自己的预约，医生开放的医院时间为一周，
              从用户预约这天的第二天开始算起。用户可以点击刷新按钮，实时查看当前预约成果。</p>
          </el-col>
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
  .divider{
    display:inline-block;
    width:1px;
    height:17em; /* 更改竖向分割线长度 */
    margin:0 8px;
    vertical-align:middle;
    position:relative;
}
  .el-divider--horizontal {
    margin: 12px 0;
  }
  .el-row {
    text-align: left;
    padding: 10px;
  }
  .docList {
    padding-left:20%;
    padding-right:20%;
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
