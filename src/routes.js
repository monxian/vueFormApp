import Signin from './components/authentication/Signin.vue';
import Home from './components/Home.vue';
import Start from './components/StartNewActivity.vue';
import Completed from './components/completedSurveys/Completed.vue';
import SingleJob from './components/completedSurveys/SingleJob.vue';

export const routes = [
	{ path: '', component: Signin},
 	{ path: '/home', component: Home },
	{ path: '/start', component: Start },
	{ path: '/completed', component: Completed},
	{ path: '/singlejob', name: 'singlejob', component: SingleJob},
	
];