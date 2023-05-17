import Vue from 'vue'
import Vuex from 'vuex'

import cate from './modules/cate'
import tag from './modules/tag'
import article from './modules/article'
import msg from './modules/msg'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawerFlag: false
  },
  mutations: {
    reDrawer (state) {
      state.drawerFlag = !state.drawerFlag
    },
    stopDrawer (state) {
      state.drawerFlag = false
    }
  },
  modules: {
    cate, tag, article, msg
  }
})
