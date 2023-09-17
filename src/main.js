import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/comm.scss'

import '@/assets/css/index.scss'

import '@/assets/css/icon.scss'

import * as directives from '@/utills/directives'
import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key])
})
Vue.use(ELEMENT)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
