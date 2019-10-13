import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const { setup, RedisStore } = require('axios-cache-adapter')
// const redis = require('redis')

// const express = require('express')
// const app = express()

// let connectionString = process.env.COMPOSE_REDIS_URL
// if (connectionString === undefined) {
//   console.error("Please set the COMPOSE_REDIS_URL environment variable")
//   process.exit(1)
// }

// let client = null

// if (connectionString.startsWith("rediss:")){
//   client = redis.createClient(connectionString, {
//     tls: {servername: new URL(connectionString).hostname}
//   })
// } else {
//   client = redis.createClient(connectionString)
// }

// // const client = redis.createClient(6379)


const getCitiesUrl = "https://nightout.com/api/cities"
const getPopularCitiesUrl = "https://nightout.com/api/cities?scope=popular"

const getConfig = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "OAuth db8vk2r6tdvenlycs75cwkju4xx7y5v"
  }
}

export default new Vuex.Store({
  state: {
    cities: [],
    popularCities: [],
    selectedCity: {},
    cityEvents: [],
    selectedEvent: {},
    cityEventCollections: [],
    selectedEventCollection: {},
  },
  getters: {
    city: state => id => {
      return state.cities.find(city => city.id == id)
    },
    event: state => id => {
      return state.cityEvents.find(event => event.id == id)
    },
    eventCollection: state => id => {
      return state.cityEventCollections.find(collection => collection.id == id)
    }
  },
  mutations: {
    setCities(state, cities){
      state.cities = cities
    },
    setPopularCities(state, popularCities){
      state.popularCities = popularCities
    },
    setSelectedCity(state, selectedCity){
      state.selectedCity = selectedCity
    },
    setCityEvents(state, cityEvents){
      state.cityEvents = cityEvents
    },
    setCityEventCollections(state, cityEventCollections){
      state.cityEventCollections = cityEventCollections
    },
    setSelectedEvent(state, selectedEvent){
      state.selectedEvent = selectedEvent
    },
    setSelectedEventCollection(state, selectedEventCollection){
      state.selectedEventCollection = selectedEventCollection
    },

  },
  actions: {
    getCities({ commit }){
      fetch(getCitiesUrl, getConfig)
      .then(response => response.json())
      .then(results => {
        commit("setCities", results)
      })
      // .catch((error) => {
      //   console.log(error)
      // })
    },
    getPopularCities({ commit }){
      fetch(getPopularCitiesUrl, getConfig)
      .then(response => response.json())
      .then(results => {
        commit("setPopularCities", results)
      })
      // .catch((error) => {
      //   console.log(error)
      // })
    },
    showCity({ commit }, id){
      fetch(`https://nightout.com/api/cities/${id}`, getConfig)
      .then(response => response.json())
      // .then(results => console.log(results))
      .then(results => {
        commit("setSelectedCity", results)
      })
      // .catch((error) => {
      //   console.log(error)
      // })
    },
    getCityEvents({ commit }, id){
      fetch(`https://nightout.com/api/events?city_ids=${id}&limit=25`, getConfig)
      .then(response => response.json())
      // .then(results => console.log(results))
      .then(results => {
        commit("setCityEvents", results)
      })
    },
    getCityEventCollections({ commit }, id){
      fetch(`https://nightout.com/api/collections?city_ids=${id}`, getConfig)
      .then(response => response.json())
      // .then(results => console.log(results))
      .then(results => {
        commit("setCityEventCollections", results)
      })
    },
    showEvent({ commit }, id){
      fetch(`https://nightout.com/api/events/${id}?details=full`, getConfig)
      .then(response => response.json())
      // .then(results => console.log(results))
      .then(results => {
        commit("setSelectedEvent", results)
      })
      // .catch((error) => {
      //   console.log(error)
      // })
    },
    showEventCollection({ commit }, id){
      fetch(`https://nightout.com/api/collections/${id}`, getConfig)
      .then(response => response.json())
      // .then(results => console.log(results))
      .then(results => {
        commit("setSelectedEventCollection", results)
      })
      // .catch((error) => {
      //   console.log(error)
      // })
    },
  }
    // timestampToDate({ commit }, id){
    //   commit("timestampToDate", id)
    // },
})
