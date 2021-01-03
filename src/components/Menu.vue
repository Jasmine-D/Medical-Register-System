<template>
  <el-col :span="8">
    <el-card :body-style="{ padding: '10px'}" style="margin-left:50%; margin-top:6%">
        <div id="bgImg">
        <div style="margin:0px 15px 0px 15px;text-align:center">
            <img src="../assets/img/doc1.png" class="image">
            <p class="id">{{id}}</p>
            <br/><br/><br/><br/>
        </div>
        </div>
        <el-menu default-active="$route.path" class="el-menu-vertical" router>
        <el-menu-item index="/order" style="text-align:center">
            <i class="el-icon-menu"></i>
            <span slot="title">我的预约</span>
        </el-menu-item>
        <el-menu-item index="/record" style="text-align:center">
            <i class="el-icon-s-order"></i>
            <span slot="title">我的病例</span>
        </el-menu-item>
        <el-menu-item index="/prescription" style="text-align:center">
            <img src="../assets/img/icon-pre.png" >
            <span slot="title">我的处方</span>
        </el-menu-item>
        <el-menu-item index="/PersonalInfo" style="text-align:center">
            <i class="el-icon-setting"></i>
            <span slot="title">账号设置</span>
        </el-menu-item>
        </el-menu>
      </el-card>
    </el-col>
</template>

<script>
import cookie from 'js-cookie'
export default {
  name: 'Menu',
  data () {
    return {
      id: ' '
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
    init () {
      if (cookie.get('token')) {
        this.id = cookie.get('id')
      } else {
        this.id = '未登录'
      }
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
  .id{
    padding-top:20px;
    font-size:16px
  }
</style>
