<template>
    <div class="block">
       <!-- 导航区域 -->
    <UserHeader/>
    <el-carousel height="600px">
      <el-carousel-item >
        <img src ="../assets/img/home1.png"/>
      </el-carousel-item>
      <el-carousel-item >
        <img src ="../assets/img/home2.png"/>
      </el-carousel-item>
      <el-carousel-item >
        <img src ="../assets/img/home3.png"/>
      </el-carousel-item>
      <el-carousel-item >
        <img src ="../assets/img/home4.png"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue'
export default {
  components: { UserHeader }
}
</script>

<style scoped>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
</style>
