import { getTagArticle, getTags } from '@/api/tag'

const state = {

}

const mutations = {

}

const actions = {
  // 获取所有标签
  async getTags () {
    return await getTags()
  },
  // 获取标签所有文章
  async getTagArticle (context, id) {
    return await getTagArticle(id)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
