<template>
  <!-- element-ui -->
  <el-container direction="vertical">
    <el-row>
      <el-col :span="14"><div class="bg-purple">欢迎您登陆预约挂号服务平台！</div></el-col>
      <el-col :span="2"><div class="bg-purple"></div></el-col>
      <el-col :span="8"><div class="bg-purple">
        <el-button type="text" style="padding:5px">退出登录</el-button>
      </div></el-col>
    </el-row>
  <el-container>
    <el-aside width="25%">
      <div style="text-align:right">
        <img src="../assets/img/logo.png" style="height:78px">
      </div>
    </el-aside>
    <el-aside width="25%" style="text-align:left; font-size:25px; padding:25px">
        预约挂号服务平台
    </el-aside>
    <el-main>
      <el-radio-group v-model="radio1" size="small">
        <el-radio-button label="医生"></el-radio-button>
        <el-radio-button label="医院"></el-radio-button>
      </el-radio-group>
      <div style="width:80%">
        <el-input v-model="input" :placeholder="holder" suffix-icon="el-icon-search"></el-input>
      </div>
    </el-main>
  </el-container>
  <el-menu default-active="$route.path" router class="menu-demo" mode="horizontal" background-color="#4c96e1" text-color="#fff" active-text-color="#ffd04">
    <el-menu-item index="/home" class="menu_item"><a href="#">网站首页</a></el-menu-item>
    <el-menu-item index="/appoint" class="menu_item"><a href="#">预约挂号</a></el-menu-item>
    <el-menu-item index="/order" class="menu_item">个人中心</el-menu-item>
    <el-menu-item index="/guide" class="menu_item"><a href="#">预约指南</a></el-menu-item>
  </el-menu>
</el-container>
</template>

<script>
export default {
  name: 'UserHeader',
  data () {
    return {
      input: '',
      radio1: '医生',
      holder: '请输入医生名进行搜索'
    }
  },
  watch: {
    radio1: function () {
      if (this.radio1 === '医生') {
        this.holder = '请输入医生名进行搜索'
      } else if (this.radio1 === '医院') {
        this.holder = '请输入医院名进行搜索'
      }
    }
  }
}
</script>

<style scoped>
  .menu-demo{
    padding-left:10%;
    padding-right:10%;
  }
  .menu_item{
  width:25%;
  text-align:center;
  font-size:15px;
  height:35px;
  line-height: 35px;
  }
  .el-menu--horizontal>.el-menu-item{
    line-height: 35px;
    height: 40px;
  }
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-col {
    border-radius: 0px;
    text-align: center;
  }
  .el-row {
    height: 30px;
    line-height: 30px;
  }
  .bg-purple {
    background: #d3dce6;
    height: 30px;
    line-height: 30px;
  }
  .el-aside
   {
    color: #333;
    text-align: center;
    height:90px;
    padding:4px;
  }
  .el-main {
    color: #333;
    text-align: left;
    height:90px;
    line-height:0px;
    padding-left:10%;
    padding-top:0.6%;
    padding-bottom:0.6%;
    padding-right:10%;
  }
</style>
