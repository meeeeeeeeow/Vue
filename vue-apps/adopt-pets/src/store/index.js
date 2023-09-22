import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // the state data of the app
    // typically including information that needs to be shared and stored in the app
    // e.g., user data, UI state, ...
  },
  getters: {
    // calculate new properties based on the data in `state`
  },
  mutations: {
    // `synchronously` modify the state
    // change the state of the app
  },
  actions: {
    // perform `asynchronous` operations and commit mutations
    // contain the business logic and handle asynchronous tasks
  },
  modules: {
    // modularize the Vuex store
  }
})
