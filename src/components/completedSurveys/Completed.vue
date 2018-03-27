<template>
	<div>
	  <app-header></app-header>
	  <h2 class="is-size-2">Completed Surveys</h2>
		<div class="columns">
			<div class="column is-one-quarter">
				<ul>
					<li v-for="(n, index) in jobsList">Job: <router-link to="/singlejob/" tag="a">{{n.id}}</router-link></li>

				</ul>
			</div>
			<div class="column is-three-quarters"></div>
		</div>
	</div>
</template>
<script>
   import axios from 'axios';
   import Header from '../Hearder.vue';

    export default {
	     created(){
		    axios.get('/test.json')
		      .then(res => {
		        console.log(res)
		        const data = res.data
		        const formInfo = []
		        for(let key in data){
		          const info = data[key]
		          info.id = key
		          formInfo.push(info)
		        }
		        console.log(formInfo)
		        this.$store.commit('setJobs', formInfo)
		       
		       })
		     .catch(error => console.log(error))
	     },
		computed: {
			jobsList(){
			return this.$store.state.jobs;
				//jobs: []
		    }
	    },
	     components:{
		 appHeader: Header,
	    }

	}
	

</script>