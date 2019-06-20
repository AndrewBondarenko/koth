import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/login',
      name: 'login',
      component: function () {
        return import('./views/Login.vue')
      }
    }
  ]
})
