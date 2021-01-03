import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/Home.vue'
import Login from '../page/Login.vue'
import Register from '../page/Register.vue'
import Appoint from '../page/Appoint.vue'
import Config from '../page/Config.vue'
import Order from '../page/Order.vue'
import Record from '../page/Record.vue'
import Prescription from '../page/Prescription.vue'
import Guide from '../page/Guide.vue'

import DoctorList from '../page/DoctorList.vue'
import DoctorDetail from '../page/DoctorDetail.vue'
import HospitalList from '../page/HospitalList.vue'
import HospitalDetail from '../page/HospitalDetail.vue'
import PersonalInfo from '../page/PersonalInfo.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/appoint',
      component: Appoint
    },
    {
      path: '/config',
      component: Config
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/record',
      component: Record
    },
    {
      path: '/prescription',
      component: Prescription
    },
    {
      path: '/guide',
      component: Guide
    },
    {
      path: '/DoctorList',
      name: 'DoctorList',
      component: DoctorList
    },
    {
      path: '/DoctorDetail',
      name: 'DoctorDetail',
      component: DoctorDetail
    },
    {
      path: '/HospitalList',
      name: 'HospitalList',
      component: HospitalList
    },
    {
      path: '/HospitalDetail',
      name: 'HospitalDetail',
      component: HospitalDetail
    },
    {
      path: '/PersonalInfo',
      name: 'PersonalInfo',
      component: PersonalInfo
    }
  ]
})
