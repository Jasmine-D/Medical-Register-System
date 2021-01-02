<template>
  <div>
    <!-- 导航区域 -->
    <UserHeader/>
    <div class="bigBord">
      <el-card :body-style="{ padding: '10px' }" style="margin-bottom:30px">
        <p class="title">如何查看自己的订单</p>
        <div v-for="(item,index) in lists" :key="index">
          <p class="part">{{item.part}}</p>
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
        part: '点击个人中心'
      }, {
        part: '点击我的订单'
      }, {
        part: '即可查看自己的订单'
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

  .bigBord {
    padding-left:20%;
    padding-right:20%;
    padding-top:1.5%;
  }

  .title{
    padding:30px;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
  }

  .part{
    padding: 10px 50px;
    font-size: 16px;
  }

</style>
