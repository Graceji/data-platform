import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import dictionary from './dictionary'
import home from './home'
import feedback from './feedback'

function addPrefix (prefix, obj = {}) {
  const newObj = {}
  Object.keys(obj).forEach((key) => {
    newObj[prefix + key] = obj[key]
  })
  return newObj
}

function wrapModule (m) {
  const newModule = {}
  newModule.state = m.state;
  ['getters', 'actions', 'mutations'].forEach((v) => {
    newModule[v] = addPrefix(`${m.namespace}/`, m[v])
  })
  return {
    [m.namespace]: newModule
  }
}

Vue.use(Vuex)

const store = new Vuex.Store({
  actions: {},
  mutations: {},
  modules: {
    ...wrapModule(user),
    ...wrapModule(dictionary),
    ...wrapModule(home),
    ...wrapModule(feedback)
  }
})

export default store
