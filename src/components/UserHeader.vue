<template>
  <!-- element-ui -->
  <el-container direction="vertical">
    <el-row>
      <el-col :span="14"><div class="bg-purple">欢迎您登陆预约挂号服务平台！</div></el-col>
      <el-col :span="2"><div class="bg-purple"></div></el-col>
      <el-col :span="8"><div class="bg-purple">
        <template>
          <el-button v-if="token" @click="logOut()" type="text">退出登录</el-button>
          <el-button v-else @click="goLog()" type="text">去登录/注册</el-button>
        </template>
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
        <el-input v-model="input" :placeholder="holder">
          <el-button slot="append" icon="el-icon-search" @click="JumptoSearch()"></el-button>
        </el-input>
      </div>
    </el-main>
  </el-container>
  <el-menu default-active="$route.path" router class="menu-demo" mode="horizontal" background-color="#4c96e1" text-color="#fff" active-text-color="#ffd04">
    <el-menu-item index="/home" class="menu_item">网站首页</el-menu-item>
    <el-menu-item index="/appoint" class="menu_item">预约挂号</el-menu-item>
    <el-menu-item index="/order" class="menu_item">个人中心</el-menu-item>
    <el-menu-item index="/guide" class="menu_item">预约指南</el-menu-item>
  </el-menu>
</el-container>
</template>

<script>
import cookie from 'js-cookie'
export default {
  name: 'UserHeader',
  data () {
    return {
      token: cookie.get('token'),
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
  },
  methods: {
    getToken () {
      this.token = cookie.get('token')
    },
    goLog () {
      this.$router.push({ path: '/login' })
    },
    logOut () {
      cookie.remove('token')
      cookie.remove('id')
      this.getToken()
    },
    // 搜索框搜索医生或者医院，路由跳转或者当前页面传参
    JumptoSearch () {
      console.log('调用函数')
      localStorage.setItem('search', this.input)
      console.log('this.input', this.input)
      console.log('this.radio', this.radio1)
      console.log('showPage', this.$route.path)
      if (this.radio1 === '医生') {
        if (this.$route.path !== '/DoctorList') {
          this.$router.push({
            path: '/DoctorList',
            name: 'DoctorList'
          })
        } else {
          this.$emit('showPage')
        }
      } else if (this.radio1 === '医院') {
        if (this.$route.path !== '/HospitalList') {
          this.$router.push({
            path: '/HospitalList',
            name: 'HospitalList'
          })
        } else {
          this.$emit('showPage')
          console.log('hahahh')
        }
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
  .el-button{
    padding:5px
  }
</style>
