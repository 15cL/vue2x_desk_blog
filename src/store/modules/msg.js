import { sendMsg, getAllMsg } from '@/api/msg'

const state = {}

const mutations = {}

const actions = {
  async sendMsg (context, list) {
    return await sendMsg(list)
  },
  async getAllMsg (context) {
    const res = await getAllMsg()
    return res.data.data
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
