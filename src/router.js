import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/views/Admin.vue'
import Search from '@/views/Search.vue'
import Cities from '@/views/Cities.vue'
import Event from '@/views/Event.vue'
import Collection from '@/views/Collection.vue'
import NewCity from '@/views/NewCity.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/admin',
      name: 'index',
      component: Admin,
      props: true,
      children: [{
        path: '/cities',
        name: 'search',
        component: Search,
        props: true,
      },{
        path: '/cities/new-city',
        name: 'new-city',
        component: NewCity,
        props: true,
      }]
    },
    {
      path: '/:slug/:id',
      name: 'city',
      component: Cities,
      props: true,
      children: [{
        path: '/events/:EventId',
        name: 'event',
        component: Event,
        props: true,
      },{
        path: '/collections/:CollectionId',
        name: 'collection',
        component: Collection,
        props: true,
      }]
    }
  ]
  })
