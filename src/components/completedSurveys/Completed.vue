<template>
	<div>
	  <app-header></app-header>
	  <h2 class="is-size-4">Completed Surveys</h2>
		<div class="columns">
			<div class="column is-one-quarter">
				<ul>
					<li v-for="(n, index, id) in jobsList" :key="id">Job: <router-link :to="{ name:'singlejob', params:{id:n.id} }" tag="a">{{n.actName}}</router-link></li>
                  
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
        data () {
            return {
                surveyId: '',

            };
        },
	     created(){
             this.$store.dispatch('fetchSurveys')
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