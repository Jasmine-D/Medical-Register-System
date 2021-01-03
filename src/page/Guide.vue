<template>
  <div>
    <!-- 导航区域 -->
    <UserHeader/>
    <div class="bigBord">
      <el-card :body-style="{ padding: '10px' }" style="margin-bottom:30px">
        <h1 class="title">预约指南</h1>
        <h2 class="m_title">查找医生信息</h2>
        <p >1、网页右上角搜索框进入搜索</p>
        <p >2、预约挂号页面进入搜索</p>
        <p >搜索后即浏览查询到的医生列表，选择某位医生后，点击进入医生详情页面，可以查看该医生详细信息。</p>
         <h2 class="m_title">预约挂号相关操作</h2>
         <h3 class="s_title">新增预约</h3>
         <p>登录状态点击需要预约的时间段，即跳转到预约详情界面，确认预约信息和填写概况，确认后点击“确认预约”，系统会为您自动申请，此时订单状态为申请中；待医院处理完成后，系统会自动刷新订单状态。</p>
         <h3 class="s_title">查看预约</h3>
         <p >在登录状态下，点击个人中心，进入我的预约，即可查看我的预约列表。</p>
         <h3 class="s_title">取消预约</h3>
         <p >在登录状态下，点击个人中心，进入我的预约，查看我的预约列表，选中某个预约后点击“取消预约"，即可提交取消预约申请</p>
      </el-card>
    </div>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue'
export default {
  components: { UserHeader }
}
</script>

<style scoped>
  .el-card{
    border-radius: 5px;
  }

  .bigBord {
    padding-left:20%;
    padding-right:20%;
    padding-top:1.5%;
  }

  .title{
    padding:30px;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
  }

  .m_title{
    padding: 10px 50px;
    font-size: 20px;
    padding-top:20px;
  }

  .s_title{
    padding: 10px 50px;
    font-size: 16px;
  }

  p{
    text-indent: 2em;
    padding: 3px 50px;
    font-size: 16px;
    line-height: 35px;
  }
</style>
