import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/permission'

// 导入公共样式
import '@/assets/css/base.scss'
import '@/assets/icon/iconfont.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
