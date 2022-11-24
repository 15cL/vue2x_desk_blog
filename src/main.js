import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/permission'

// 导入公共样式
import '@/assets/css/base.scss'
import '@/assets/icon/iconfont.scss'

// 引入mavonEditor
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import ELEMENT from 'element-ui'
Vue.use(mavonEditor)

// 解决el-dialog打开弹框时的抖动
ELEMENT.Dialog.props.lockScroll.default = false

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
