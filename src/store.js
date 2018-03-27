import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
  	jobs: [],
  },
  mutations: {
  	setJobs(state, jobs){
  		state.jobs = jobs;
  	}
  },
  actions: {

  },
  getters: {

  	
  }
})