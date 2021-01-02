<template>
  <div>
    <!-- 导航区域 -->
    <UserHeader/>
    <div class="config">
      <el-card :body-style="{ padding: '10px' }" style="margin-bottom:30px">
        <p class="ques">常见问题</p>
        <div id="guideList" default-active="$route.path" v-for="(item,index) in lists" :key="index">
          <span class="title"><a href="/article">{{item.title}}</a></span>
          <span class="date">{{item.date}}</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue'
export default {
  components: { UserHeader },
  data () {
    return {
      lists: [{
        title: '如何查看自己的订单',
        date: '2020-05-26'
      }, {
        title: '如何对订单进行修改',
        date: '2020-12-26'
      }, {
        title: '如何查看自己的订单',
        date: '2020-05-26'
      }, {
        title: '如何对订单进行修改',
        date: '2020-12-26'
      }]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .el-card{
    border-radius: 5px;
  }

  .config {
    padding-left:20%;
    padding-right:20%;
    padding-top:1.5%;
  }

  .ques{
    padding:20px;
    font-weight: 600;
    font-size: 18px;
  }

  #guideList{
    font-size: 16px;
    padding:10px 30px;
  }

  .date{
    float:right;
  }
</style>
