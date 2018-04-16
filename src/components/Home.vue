<template>
 <div class="wallpaper">
  <div class="container">
     <section class="hero ">
      <div class="hero-body">
        <div class="container">
          <img src="../assets/logo.png" alt="logo" width="150" height="150">
            <h2 class="title is-size-2">
                <span class="brand-logo">Qa App</span>
            </h2>
          <h4 class="subtitle">
            A tier 3 mobile app
          </h4>
        </div>
      </div>
    </section>
    <div class="level">
      <router-link to="/completed" class="button  rounded" tag="button">Completed Surveys</router-link>
      <router-link to="/setup"  class="button  rounded" tag="button">Start New Survey</router-link>
    </div>
    <div class="level">
      <router-link to="/completed" class="button  rounded" tag="button">Resume Survey</router-link>
    </div>
    <!-- <button @click="navigateToNew" class="button is-info">Start New Survey</button> -->
  </div>
 </div>
</template>

<script>
  export default {
   data: function(){
	    return {

	    }
	  },
	  methods: {
	  	 // navigateToNew(){
	  	 // 	this.$router.push('/start');
	  	 // }
	  },

	}
</script>

<style scoped>

.rounded{
  border-radius: 5px;
}
.brand-logo{
	font-family: 'Audiowide', cursive;
}
.wallpaper{
  background: url('../assets/background.png');
  min-height: 600px;
  background-repeat:no-repeat;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  -o-background-size:cover;
  background-size:cover;
  background-position:center;

}
a {
  color: #42b983;
}
</style>
