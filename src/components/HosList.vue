<template>
  <el-card :body-style="{ padding: '15px' }">
    <el-container direction="vertical">
      <el-row>
        <el-col :span="4"><div><img :src="hosPic" class="image"></div></el-col>
        <el-col :span="16" style="text-align:left">
          <div style="padding:10px 20px">
              <p style="font-size:18px;color:black;display:inline">{{hosName}}</p>
              <p style="font-size:15px;padding-left:20px;color:orange;display:inline">{{hosType}}</p>
          </div>
          <div>
              <i class="el-icon-phone" style="display:inline;padding-left:20px"></i>
              <p style="font-size:15px;color:gray;display:inline">{{hosTelephone}}</p>
          </div>
          <div>
              <i class="el-icon-location" style="display:inline;padding-left:20px"></i>
              <p style="font-size:15px;color:gray;display:inline">{{hosPosition}}</p>
          </div>
        </el-col>
        <el-col :span="1"><el-divider direction="vertical" class="divider"></el-divider></el-col>
        <el-col :span="3"><div style="padding:25% 5% 25% 5%">
          <el-button type="primary" plain @click="JumptoDetail">挂号</el-button>
        </div></el-col>
      </el-row>
    </el-container>
  </el-card>
</template>

<script>
export default {
  name: 'HosList',
  props: {
    hosPic: {
      type: String,
      required: true
    },
    hosName: {
      type: String,
      required: true
    },
    hosType: {
      type: String,
      required: true
    },
    hosTelephone: {
      type: String,
      required: true
    },
    hosPosition: {
      type: String,
      required: true
    },
    hosIntro: {
      type: String,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    JumptoDetail: function () {
      this.$router.push({
        path: '/HospitalDetail',
        name: 'HospitalDetail',
        query: {
          hosPic: this.hosPic,
          hosName: this.hosName,
          hosType: this.hosType,
          hosTelephone: this.hosTelephone,
          hosPosition: this.hosPosition,
          hosIntro: this.hosIntro
        }
      })
    }
  }
}
</script>
<style type="text/css" scoped>
  .content > div {
    width: 100%;
  }
  .word{
    font-size:15px;
    line-height:30px;
    color:black;
    display:inline;
  }
  .divider {
    height:7.2em;
  }
  .image{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
</style>
