import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import axios from 'axios';

import App from './App.vue';
import { store }from './store';

axios.defaults.baseURL = 'http://localhost:3000/';
// axios.defaults.headers.common['Authorization'] = 'fstatone';
// axios.defaults.headers.get['Accepts'] = 'application/json';

Vue.use(VueRouter);
export const router = new VueRouter({
	routes: routes,
	store: store,
	mode: 'history'
	});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
