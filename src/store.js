import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import {router} from './main.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    jobs: [],
    outlets:[],
    outsideValues:[],
  },
  mutations: {
  	setJobs(state, jobs){
  		state.jobs = jobs;
    },
    setOutlets(state, outlets){
        state.outlets = outlets;
    },
    setOutside(state, outsideValues){
        state.outsideValues = outsideValues;
    },
    authUser(state, userData){
  	    state.idToken = userData.token
        state.userId = userData.userId
    },

  },
  actions: {
      signup({ commit }, authData){

      },
      signin({ commit }, authData){
          axios.post('api/Users/login', authData)
            .then(res => {
                console.log(res)
                commit('authUser', {
                    token: res.data.id,
                    userId: res.data.userId
                })
                //redirect logic
                router.push('/completed');

            })
            .catch(error => console.log(error))
      },

      storeUser({commit, state}, userData){
          if(!state.idToken){
              return
          }

      },
      fetchSurveys({commit, state}){
          axios.get('/api/Activities?access_token='+state.idToken)
              .then(res => {
                  console.log(res)
                  const data = res.data
                  const formInfo = []
                  for(let key in data){
                      const info = data[key]
                      // info.id = key
                      formInfo.push(info)
                  }
                  console.log(formInfo)
                  commit('setJobs', formInfo)

              })
              .catch(error => console.log(error))
      },
      //Fetch data for the outlets from specific survey
      fetchOutlets({commit, state}, surveyId){
        axios.get('/api/Activities/'+surveyId+'/outlets?access_token='+state.idToken)
            .then(res => {
                console.log(res);
                const data = res.data;
                const formInfo = [];
                for(let key in data){
                    const info = data[key];
                    formInfo.push(info)
                }
                commit('setOutlets', formInfo)

            })
            .catch(error => console.log(error))
      },
      // Fetch data for outside survey from specific survey
      fetchOutside({commit, state}, surveyId){
          axios.get('/api/Activities/'+surveyId+'/outsides?access_token='+state.idToken)
              .then(res => {
                  const data = res.data;
                  console.log(data.bondcx);
                  const formInfo = [];
                  for(let key in data){
                      const info = data[key];
                      formInfo.push(info)
                  }
                 commit('setOutside', formInfo)

              })
              .catch(error => console.log(error))
      }

  },
  getters: {

  	
  }
})