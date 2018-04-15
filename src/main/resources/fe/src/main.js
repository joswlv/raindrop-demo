import Vue from 'vue'
import Router from 'vue-router'
import FastClick from 'fastclick'

import Vum from './vum.js'

// demos
import Index from './demos/Index'

Vue.use(Router)
Vue.use(Vum)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})

new Vue({
  router
}).$mount('#app')

Vum.router(router)

FastClick.attach(document.body)
