import Vue from 'vue'
import Router, { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Login from '@/pages/login/Login'
import Self from '@/pages/self/Self'

// Vue.use(Router)

export default createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home') // 异步组件按需加载: component: () => import('@/pages/home/Home')
    }, {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    }, {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/login/Login')
    }, {
      path: '/self',
      name: 'Self',
      component: () => import('@/pages/self/Self')
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
});
