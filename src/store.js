import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
    popularCities: []
  },
  getters: {
    city: state => id => {
      return state.cities.find(city => city.id == id)
    }
  }
  mutations: {
    setCities(state, cities){
      state.cities = cities
    },
    setPopularCities(state, popularCities){
      state.popularCities = popularCities
    }
  },
  actions: {
    getCities({ commit }){
      fetch(getCitiesUrl, getConfig)
      .then(response => response.json())
      .then(results => {
        commit("setCities", results)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    getPopularCities({ commit }){
      fetch(getPopularCitiesUrl, getConfig)
      .then(response => response.json())
      .then(results => {
        commit("setPopularCities", results)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
})
