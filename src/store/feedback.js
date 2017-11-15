import API from '../api/feedback'

export default {
  namespace: 'feedback',
  state: {
    questiontype: 0,
    content: '',
    result: ''
  },
  getters: {
    questiontype: state => state.questiontype,
    content: state => state.content
  },
  mutations: {
    getFeedbackDone (state, { result }) {
      state.result = result
    }
  },
  actions: {
    async feedback ({ commit }, params) {
      const { data } = await API.feedback(params)
      commit('feedback/getFeedbackDone', {
        result: data.state
      })
      return data
    }
  }
}
