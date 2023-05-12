import Vue from 'vue'
import Vuex from 'vuex'

import cate from './modules/cate'
import tag from './modules/tag'
import article from './modules/article'
import msg from './modules/msg'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cate, tag, article, msg
  }
})
