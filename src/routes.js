import {store} from './store';

import Signin from './components/authentication/Signin.vue';
import Home from './components/Home.vue';
import Start from './components/newSurvey/StartNewSurvey.vue';
import Setup from './components/newSurvey/SetupSurvey.vue';
import Completed from './components/completedSurveys/Completed.vue';
import SingleJob from './components/completedSurveys/SingleJob.vue';

export const routes = [
	{ path: '/', component: Signin},
 	{ path: '/home',
        component: Home,
        beforeEnter(to, from, next) {
            if (store.state.idToken) {
                next()
            } else {
                next('/')
            }
        }
    },
    //Choose between starting a new survey or looking at an completed one
	{ path: '/start',
        component: Start,
        beforeEnter(to, from, next) {
            if (store.state.idToken) {
                next()
            } else {
                next('/')
            }
        }
    },
    //Setup page for new survey called activity in backend
    { path: '/setup',
        component: Setup,
        beforeEnter(to, from, next) {
            if (store.state.idToken) {
                next()
            } else {
                next('/')
            }
        }
    },
    //look at completed surveys
	{ path: '/completed',
        component: Completed,
        beforeEnter(to, from, next) {
            if (store.state.idToken) {
                next()
            } else {
                next('/')
            }
        }
    },
    //Input forms for new survey
	{ path: '/singlejob',
        name: 'singlejob',
        component: SingleJob,
        beforeEnter(to, from, next){
            if(store.state.idToken){
                next()
            } else {
               next('/')
            }
        }
    },
	
];