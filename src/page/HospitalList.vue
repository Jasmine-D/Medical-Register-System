<template>
    <div style="margin:0 auto">
    <UserHeader/>
    <div style="padding:2% 18%">
      <p style="float:left">共搜索出</p>
      <p style="float:left">3</p>
      <p style="float:left">家医院</p>
    </div>
    <el-row v-for="(o, index) in 3" :key="o" :offset="index> 0 ? 3 : 0">
      <el-col :span="24" class="hosList">
        <el-card :body-style="{ padding: '0px' }">
          <el-container direction="vertical">
            <el-row>
              <el-col :span="4"><div><img src="../assets/img/hospital.png" class="image"></div></el-col>
              <el-col :span="16" style="text-align:left">
                <div style="padding:15px 20px">
                    <p style="font-size:18px;color:black;display:inline">上海交通大学医学院附属瑞金医院</p>
                    <p style="font-size:15px;padding-left:20px;color:orange;display:inline">三级甲等</p>
                </div>
                <div>
                    <i class="el-icon-phone" style="display:inline;padding-left:20px"></i>
                    <p style="font-size:15px;color:gray;display:inline">021-64370045</p>
                </div>
                <div>
                    <i class="el-icon-location" style="display:inline;padding-left:20px"></i>
                    <p style="font-size:15px;color:gray;display:inline">上海市黄浦区瑞金二路197号</p>
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
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue'
export default {
  components: { UserHeader }
  // name: 'App',
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
