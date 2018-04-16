import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import {router} from './main.js'

Vue.use(Vuex);

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
  	    state.idToken = userData.token;
        state.userId = userData.userId;
    },
    clearAuthData(state){
        state.idToken = null;
        state.userId = null;
    },

  },
  actions: {
     signout({commit}){
          commit('clearAuthData');
          localStorage.setItem('token', '');
          localStorage.setItem('userId', '');
          router.push('/');
      },
      signup({ commit }, authData){

      },
      signin({ commit }, authData){
          axios.post('api/Users/login', authData)
            .then(res => {
                //console.log(res);
                commit('authUser', {
                    token: res.data.id,
                    userId: res.data.userId
                });
                localStorage.setItem('token', res.data.id);
                localStorage.setItem('userId', res.data.userId);
                //localStorage.setItem('expiresIn', ) fix later for auto signout
                //redirect logic
                router.push('/home');
            })
            .catch(error => console.log(error))
      },
      tryAutoSignin({commit}){
          const token = localStorage.getItem('token');
          if(!token){
             return
          }
          const userId = localStorage.getItem('userId');
          commit('authUser',{
              token: token,
              userId: userId
          });
          router.push('/home');
      },
      storeUser({commit, state}, userData){
          if(!state.idToken){

          }
      },
      fetchSurveys({commit, state}){
          axios.get('/api/Activities?access_token='+state.idToken)
              .then(res => {
                  const data = res.data;
                  const formInfo = [];
                  for(let key in data){
                      const info = data[key];
                      // info.id = key
                      formInfo.push(info)
                  }
                  //console.log(formInfo);
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
                //  console.log(data.bondcx);
                  const formInfo = [];
                  for(let key in data){
                      const info = data[key];
                      formInfo.push(info)
                  }
                 commit('setOutside', formInfo)

              })
              .catch(error => console.log(error))
      },

      //******   post section *****
      newSurveyPost({state}, formData){
         axios.post('/api/Activities?access_token='+state.idToken, formData)
             .then(res => {
               console.log(res)})
             .catch(error => console.log(error))
      }

  },
  getters: {
    isAuthenticated(state){
        return state.idToken !== null
    }

  }
});
