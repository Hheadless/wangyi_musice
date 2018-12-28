import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/home'
import Login from '@/containers/login'
import Master from '@/containers/master/index'
import Mine from '@/containers/master/mine'
import Find from '@/containers/master/find'
import Account from '@/containers/master/account'
import Friend from '@/containers/master/friend'
import Video from '@/containers/master/video'
import Recommend from '@/containers/master/recommend'
import Station from '@/containers/master/Station'

import StoreView from '@/components/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/master',
      name: 'Master',
      component: Master,
      redirect: '/find',
      children: [{
        path: '/find',
        name: 'Find',
        component: Find,
        redirect: '/find/recommend',
        children: [{
          path: '/find/recommend',
          name: 'Recommend',
          component: Recommend,
        }, {
          path: '/find/station',
          name: 'Station',
          component: Station,
        }]
      }, {
        path: '/video',
        name: 'Video',
        component: Video,
      }, {
        path: '/mine',
        name: 'Mine',
        component: Mine,
      }, {
        path: '/friend',
        name: 'Friend',
        component: Friend,
      }, {
        path: '/account',
        name: 'Account',
        component: Account,
      }]
    },
    {
      path: '/sss',
      component: StoreView
    }
  ]
})
