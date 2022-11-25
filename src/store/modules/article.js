
import { getArticles } from '@/api/article'

const state = {

}

const mutations = {

}

const actions = {
  async getArticles () {
    return await getArticles()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
