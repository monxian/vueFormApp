<template>
   <div class="level is-mobile">
	  <div class="level-item">
	     <router-link 
	        to="/completed" tag="a">
	        <div style="font-size:1.5em; color:#4d92b9">
              <i class="fas fa-home"></i>
            </div>
	     </router-link>
         <h3 class="logo is-size-3 level-item"> QaApp</h3>
         <router-link 
	        to="/" tag="a">
	        <div style="font-size:1.5em; color: #4d92b9">
              <i class="fas fa-sign-out-alt"></i>
            </div>
	     </router-link>
	  </div>
    </div>
  
</template>
<script type="text/javascript">


</script>
<style scoped>
	.level{
		margin: 10px;
		padding: 5px;
		border-bottom: 1px solid #ccc;
	}
	.logo{
		font-family: 'Audiowide', cursive;
	}

</style>
