import Vue from 'vue'
import Router from 'vue-router'
import Menu from '../components/Menu.vue'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Dictionary from '../components/dictionary/Dictionary.vue'
import Table from '../components/dictionary/dic_Tables.vue'
import Visual from '../components/Visual.vue'
import DataFeedBack from '../components/feedback/FeedBack.vue'
// import store from '../store'
// import Visual from '../components/Visual1.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/route',
  routes: [
    {
      path: '/',
      redirect: '/login',
      component: Login
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
      meta: {
        auth: true
      },
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'dictionary',
          name: 'dictionary',
          component: Dictionary
        },
        {
          path: 'dictionary/:id',
          name: 'dic_Tables',
          component: Table
        },
        {
          path: 'feedBack',
          name: 'dataFeedBack',
          component: DataFeedBack
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/visual',
      name: 'visual',
      component: Visual,
      meta: {
        auth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth)) {
    if (sessionStorage.getItem('username')) {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.fullPath } })
    }
  } else {
    next()
  }
})

export default router
