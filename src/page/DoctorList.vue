<template>
  <!-- element-ui -->
  <div style="margin:0 auto">
    <UserHeader @showPage="showPage"></UserHeader>
    <div style="padding:2% 18%">
      <p style="float:left">共搜索出</p>
      <p style="float:left">{{this.docNum}}</p>
      <p style="float:left">位医生</p>
    </div>
    <el-row v-for="(docInfo, index) in docListInfo" :key="index">
      <el-col :span="24" class="docList">
        <DocList
          :docName="docInfo.name"
          :docDepartment="docInfo.department"
          :docProfessional_title="docInfo.professional_title"
          :docExpert_in="docInfo.expert_in"
          :docIntro="docInfo.intro"
          :docHospital_name="docInfo.hospital_name"
          :docHospital_region="docInfo.hospital_region"
        >
        </DocList>
      </el-col>
    </el-row>
    <div style="text-align:center">
      <el-pagination
        background
        :page-size="3"
        :current-page.sync="currentPage"
        :page-count="this.totalPage"
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import UserHeader from '@/components/UserHeader.vue'
import DocList from '@/components/DocList.vue'
import { search } from '../api/order'
import {
  getDocList,
  getDocListAcc
} from '../api/Search'

export default {
  components: {
    UserHeader,
    DocList
  },
  data () {
    return {
      docListInfo: [],
      currentPage: 0,
      totalPage: 0,
      docNum: 0,
      docName: '',
      hosName: '',
      deptName: '',
      method: '',
      region: ''
    }
  },
  mounted () {
    this.currentPage = 1
    this.showPage()
  },
  methods: {
    showPage () {
      this.docName = localStorage.getItem('search')
      if (this.docName !== '') {
        console.log('docName', this.docName)
        getDocList(this.docName, 3, this.currentPage)
          .then((response) => {
            this.docListInfo = response.data
            this.totalPage = response.totalPage
            this.docNum = response.count
            console.log(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        this.method = this.$route.query.method
        if (this.method === 'appoint') {
          this.region = this.$route.query.region
          this.hosName = this.$route.query.hospital
          this.deptName = this.$route.query.dept
          search(this.region, this.hosName, this.deptName, 3, this.currentPage)
            .then((response) => {
              this.docListInfo = response.data
              this.totalPage = 1
              this.docNum = response.count
              console.log(response)
            })
        } else {
          this.hosName = this.$route.query.hosName
          this.deptName = this.$route.query.deptName
          getDocListAcc(this.hosName, this.deptName, 3, this.currentPage)
            .then((response) => {
              this.docListInfo = response.data
              this.totalPage = response.totalPage
              this.docNum = response.count
              console.log(response)
            })
            .catch((error) => {
              console.log(error)
            })
        }
      }
    },
    handleCurrentChange (val) {
      this.currentPage = val
      console.log(`当前页: ${val}`)
      this.showPage()
    },
    JumptoDetail: function () {
      this.$router.push({
        path: '/DoctorDetail',
        name: 'DoctorDetail',
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

<style scoped>
  .divider {
    height:7.2em;
  }
  .docList {
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
