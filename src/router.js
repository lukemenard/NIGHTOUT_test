import Vue from 'vue'
import Router from 'vue-router'
// import Cities from '@/views/Cities.vue'
import Admin from '@/views/Admin.vue'
import Search from '@/views/Search.vue'
import Cities from '@/views/Cities.vue'
import Event from '@/views/Event.vue'
import Collection from '@/views/Collection.vue'

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
        path: '/cities',
        name: 'search',
        component: Search,
      },{
        path: '/:slug',
        name: 'city',
        component: Cities,
      },{
        path: '/events/:id',
        name: 'event',
        component: Event,
      },{
        path: '/collections/:id',
        name: 'collection',
        component: Collection,
      }]
    }
  ]
})
