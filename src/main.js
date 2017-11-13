
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/index'
import echarts from 'echarts'
import 'element-ui/lib/theme-default/index.css'
import 'cd-themify-icons'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false
Vue.config.silent = true

Vue.use(ElementUI)
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
