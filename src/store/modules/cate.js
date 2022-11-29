import { getCateArticle, getCates } from '@/api/cate'

const state = {

}

const mutations = {

}

const actions = {
  async getCates () {
    return await getCates()
  },

  // 查询分类文章
  async getCateArticle (context, id) {
    return await getCateArticle(id)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
