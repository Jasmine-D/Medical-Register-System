//  导入全局样式表
import './assets/css/global.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import api from './api/personal'
//  手动配置element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.use(ElementUI)
// Vue.prototype.$api = api
Vue.prototype.$api = axios
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
