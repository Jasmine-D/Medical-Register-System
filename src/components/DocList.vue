<template>
  <el-card :body-style="{ padding: '15px' }">
    <el-container direction="vertical">
      <el-row>
        <el-col :span="3"><div><img src="../assets/img/doc1.png" class="image"></div></el-col>
        <el-col :span="4">
          <p style="font-size:20px;padding:15px;color:orange">{{docName}}</p>
          <p style="font-size:15px;color:gray">{{docDepartment}}</p>
        </el-col>
        <el-col :span="3">
          <p style="font-size:15px;padding:16px 0px 16px 0px;color:black">{{docProfessional_title}}</p>
        </el-col>
        <el-col :span="1"><el-divider direction="vertical" class="divider"></el-divider></el-col>
        <el-col :span="9">
          <div style="font-size:15px; padding:15px; text-align:left">
            <p style="display:inline">擅长:</p>
            <p style="display:inline">{{docExpert_in}}</p>
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
  name: 'DocList',
  props: {
    docName: {
      type: String,
      required: true
    },
    docDepartment: {
      type: String,
      required: true
    },
    docProfessional_title: {
      type: String,
      required: true
    },
    docExpert_in: {
      type: String,
      required: true
    },
    docIntro: {
      type: String,
      required: true
    },
    docHospital_name: {
      type: String,
      required: true
    },
    docHospital_region: {
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
        path: '/DoctorDetail',
        name: 'DoctorDetail',
        params: {
          docName: this.docName,
          docDepartment: this.docDepartment,
          docProfessional_title: this.docProfessional_title,
          docExpert_in: this.docExpert_in,
          docIntro: this.docIntro,
          docHospital_name: this.docHospital_name,
          docHospital_region: this.docHospital_region
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
