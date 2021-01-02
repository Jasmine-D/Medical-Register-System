<template>
  <el-col :span="8">
    <el-card :body-style="{ padding: '10px'}" style="margin-left:50%; margin-top:6%">
        <div id="bgImg">
        <div style="margin:0px 15px 0px 15px;text-align:center">
            <img src="../assets/img/doc1.png" class="image">
            <p>用户名</p>
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
        <el-menu-item index="2" style="text-align:center">
            <i class="el-icon-setting"></i>
            <span slot="title">账号设置</span>
        </el-menu-item>
        </el-menu>
      </el-card>
    </el-col>
</template>

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
