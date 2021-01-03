<template>
<div>
  <UserHeader/>
  <div class="docList">
    <el-card :body-style="{ padding: '10px' }" style="margin-bottom:30px">
      <el-container direction="vertical">
        <el-row>
          <el-col :span="5" ><div><img src="../assets/img/doc1.png" class="image"></div></el-col>
          <el-col :span="18" style="padding-left:20px">
            <div>
              <p style="font-size:20px;padding:5px;color:orange;display:inline">{{docName}}</p>
              <p class="word">{{docProfessional_title}}</p>
            </div>
            <div>
              <p class="word">{{docHospital_name}}</p>
              <p class="word">---</p>
              <p class="word">{{docDepartment}}</p>
            </div>
            <el-divider></el-divider>
            <div>
              <p style="line-height:30px;display:inline">擅长: </p>
              <p style="line-height:30px;display:inline">{{docExpert_in}}</p>
            </div>
            <div>
              <p style="line-height:20px;display:inline">简介: </p>
              <p style="line-height:20px;display:inline">{{docIntro}}</p>
            </div>
          </el-col>
        </el-row>
      </el-container>
    </el-card>

    <el-card :body-style="{ padding: '10px' }" style="margin-top:30px">
      <el-container direction="vertical">
        <el-row>
          <el-col :span="18">
            <p style="font-size:20px;padding:5px;color:black;display:inline">预约挂号</p>
            <el-divider></el-divider>
            <div>
              <p class="word">医院：</p>
              <p class="word">{{docHospital_name}}</p>
            </div>
            <div>
              <p class="word">科室：</p>
              <p class="word">{{docDepartment}}</p>
            </div>
            <div>
              <p class="word">排班：</p>
              <img src="../assets/img/blueCircle.png" class="icon">
              <p class="word">专家门诊</p>
              <img src="../assets/img/greenCircle.png" class="icon">
              <p class="word">普通门诊</p>
              <img src="../assets/img/orangeCircle.png" class="icon">
              <p class="word">特需门诊</p>
            </div>
            <div style="padding-left:45px; display:inline" v-for="(schedule, index) in docScheduleList" :key="index">
              <el-popover
                placement="bottom"
                width="150px"
                trigger="hover"
                :content="'挂号费:  '+schedule.price+'元'">
                <el-button :type="computeBtnType(schedule.professional_title)" size="medium"  slot="reference" round class="button">
                  <p style="display:inline">{{schedule.date}}</p>
                  <p style="display:inline">{{computeTimeSlot(schedule.time_slot)}}</p>
                </el-button>
              </el-popover>
            </div>
          </el-col>
          <el-col :span="1"><el-divider direction="vertical" class="divider"></el-divider></el-col>
          <el-col :span="5">
            <p style="line-height:40px">预约规则：</p>
            <p style="line-height:20px">预约后用户可以在我的预约页面查看自己的预约，医生开放的医院时间为一周，
              从用户预约这天的第二天开始算起。用户可以点击刷新按钮，实时查看当前预约成果。</p>
          </el-col>
        </el-row>
      </el-container>
    </el-card>
  </div>
</div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue'
import {
  getSchedule
} from '../api/Search'
// import axios from 'axios'
export default {
  components: { UserHeader },
  data () {
    return {
      info: null,
      docName: '',
      docDepartment: '',
      docProfessional_title: '',
      docExpert_in: '',
      docIntro: '',
      docHospital_name: '',
      docHospital_region: '',
      docScheduleList: []

    }
  },
  mounted () {
    this.docName = this.$route.params.docName
    this.docDepartment = this.$route.params.docDepartment
    this.docProfessional_title = this.$route.params.docProfessional_title
    this.docExpert_in = this.$route.params.docExpert_in
    this.docIntro = this.$route.params.docIntro
    this.docHospital_name = this.$route.params.docHospital_name
    this.docHospital_region = this.$route.params.docHospital_region
    this.showSchedule()
  },
  methods: {
    showSchedule () {
      getSchedule(this.docName, this.docHospital_name, this.docDepartment)
        .then((response) => {
          this.docScheduleList = response.schedule_list
          console.log(response.schedule_list)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  computed: {
    computeBtnType () {
      return function (ScheduleType) {
        console.log(ScheduleType)
        if (ScheduleType === '专家门诊') {
          return 'primary'
        } else if (ScheduleType === '普通门诊') {
          return 'success'
        } else if (ScheduleType === '特需门诊') {
          return 'warning'
        }
      }
    },
    computeTimeSlot () {
      return function (ScheduleTime) {
        console.log(ScheduleTime)
        if (ScheduleTime === 1) {
          return '上午'
        } else if (ScheduleTime === 2) {
          return '下午'
        } else if (ScheduleTime === 3) {
          return '全天'
        }
      }
    }
  }
}
</script>

<style scoped>
  .word{
    font-size:15px;
    line-height:30px;
    color:black;
    display:inline;
  }
  .divider{
    display:inline-block;
    width:1px;
    height:17em; /* 更改竖向分割线长度 */
    margin:0 8px;
    vertical-align:middle;
    position:relative;
}
  .el-divider--horizontal {
    margin: 12px 0;
  }
  .el-row {
    text-align: left;
    padding: 10px;
  }
  .docList {
    padding-left:20%;
    padding-right:20%;
    padding-top:2%;
    padding-bottom:2%;
  }
  .image{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  .specialButton {
    background-color:#a93ed5;
    border-color:#a93ed5;
    margin:5px;
    padding:10px;
  }
  .icon {
    width: 15px;
    height: 15px;
    display: inline;
  }
  .button {
    margin:5px;
    padding:10px;
  }
  .el-button+.el-button {
    margin-left: 5px;
}
</style>
