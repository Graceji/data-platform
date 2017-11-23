import Vue from 'vue'
import Router from 'vue-router'
import Menu from '../components/Menu.vue'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Dictionary from '../components/dictionary/Dictionary.vue'
import Table from '../components/dictionary/dic_Tables.vue'
import Visual from '../components/Visual.vue'
import DataFeedBack from '../components/feedback/FeedBack.vue'
import FeedBackSuccess from '../components/feedback/FeedBackSuccess.vue'
// import store from '../store'
// import Visual from '../components/Visual1.vue'
import Law from '../components/home/Law'
import Fiance from '../components/home/Fiance'
import Sentiment from '../components/home/Sentiment'
import Macrography from '../components/home/Macrography'
import Industry from '../components/home/Industry'
import Customs from '../components/home/Customs'
import Estate from '../components/home/Estate'
import Recruit from '../components/home/Recruit'
import Commerce from '../components/home/Commerce'

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
          component: Home,
          children: [
            {
              path: 'law',
              name: 'law',
              component: Law
            },
            {
              path: 'fiance',
              name: 'fiance',
              component: Fiance
            },
            {
              path: 'sentiment',
              name: 'sentiment',
              component: Sentiment
            },
            {
              path: 'macrography',
              name: 'macrography',
              component: Macrography
            },
            {
              path: 'industry',
              name: 'industry',
              component: Industry
            },
            {
              path: 'customs',
              name: 'customs',
              component: Customs
            },
            {
              path: 'estate',
              name: 'estate',
              component: Estate
            },
            {
              path: 'recruit',
              name: 'recruit',
              component: Recruit
            },
            {
              path: 'commerce',
              name: 'commerce',
              component: Commerce
            }
          ]
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
        },
        {
          path: 'feedBack/:status',
          name: 'dataFeedBack',
          component: FeedBackSuccess
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
