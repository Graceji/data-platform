import API from '../api/feedback'

export default {
  namespace: 'feedback',
  state: {
    questiontype: 0,
    content: ''
  },
  getters: {
    questiontype: state => state.questiontype,
    content: state => state.content
  },
  mutations: {
    getFeedbackDone (state) {

    }
  },
  actions: {
    async feedback ({ commit }, params) {
      console.log('params', params)
      const { data } = await API.feedback(params)
      commit('feedback/getFeedbackDone', {

      })
      return data
    }
  }
}
