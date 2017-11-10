import API from '../api/claim'

export default {
  namespace: 'claim',
  state: {
    list: [],
    total: null,
    item: null,
    detail: []
  },
  getters: {
    list: state => state.list,
    listMap: state => state.list.reduce((o, v) => {
      o[v.id] = v
      return o
    }, {}),
    total: state => state.total,
    item: state => state.item,
    subItem: state => state.subItem,
    events: state => state.events,
    detail: state => state.detail
  },
  actions: {
    async getList ({ commit }, params) {
      const { headers, data } = await API.list(params)
      commit('claim/getListDone', {
        list: data,
        total: parseInt(headers['x-total-count'], 10)
      })
    },
    async getItem ({ commit }, id) {
      const { data } = await API.item(id)
      commit('claim/getItemDone', {
        item: data
      })
    },
    async subList ({ commit }, formObj) {
      const { data } = await API.subList(formObj)
      commit('claim/subItemDone', {
        subItem: data
      })
      return data.id
    },
    async getDetail ({ commit }, claimId) {
      const { data } = await API.getDetail(claimId)
      commit('claim/getDetailDone', {
        detail: data
      })
      return data
    },
    async changeEvent (ctx, params) {
      await API.changeEvent(params)
    }
  },
  mutations: {
    getListDone (state, { list, total }) {
      state.list = list
      state.total = total
    },
    getItemDone (state, { item }) {
      state.item = item
    },
    getDetailDone (state, { detail }) {
      state.detail = detail
    },
    subItemDone (state, { subItem }) {
      state.subItem = subItem
    },
    changeEventDone (state, { event }) {
      state.event = event
    }
  }
}
