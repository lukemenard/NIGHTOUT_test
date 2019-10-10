import Vue from 'vue'
import Router from 'vue-router'
// import Cities from '@/views/Cities.vue'
import Admin from '@/views/Admin.vue'
import Search from '@/views/Search.vue'
import Cities from '@/views/Cities.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/admin',
      name: 'index',
      component: Admin,
      children: [{
        path: '/search',
        name: 'search',
        component: Search,
      },{
        path: '/city',
        name: 'city',
        component: Cities,
      }]
    }
  ]
})
