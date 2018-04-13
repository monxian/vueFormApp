<template>
  <div>
    <h3 class="is-size-3">Completed Outside</h3>
    <img src="../../assets/outlet.png"  alt="outlet" width="150" height="150">
	<div class="receiver-field">
		<h4 class="is-size-4">Bond</h4>
		<div class="field">
			<div class="control">
				<label class="checkbox">
					<input type="checkbox" :checked="outsideList[0] ? true : false">
					Connected to GB/MS
				</label>
			</div>
		</div>

		<div class="field">
			<div class="control">
				<label class="checkbox">
					<input type="checkbox" :checked="outsideList[1] ? true : false">
					Connected to ODU
				</label>
			</div>
		</div>

		<div class="field">
			<label class="label">Connection Type</label>
			<input type="text" :value = "outsideList[2]">
			
		</div>

		<div class="field">
			<label class="label">Other Bond Type</label>
			<div class="control">
				<input class="input" type="text" :value = "outsideList[3]">
			</div>
		</div>

		<!-- Grounding section -->

		<h4 class="is-size-4">Ground</h4>
		<div class="field">
			<div class="control">
				<label class="checkbox">
					<input type="checkbox" :checked="outsideList[4] ? true : false">
					Connected to GB/MS
				</label>
			</div>
		</div>

		<div class="field">
			<div class="control">
				<label class="checkbox">
					<input type="checkbox" :checked="outsideList[5] ? true : false">
					Connected to Ground Source
				</label>
			</div>
		</div>

		<div class="field">
			<label class="label">Connection Type</label>
			<div class="control">
				<div class="select">
					<select>
						<option>Braid</option>
						<option>Stack</option>
						<option>Block</option>
						<option>Electrical Box</option>
					</select>
				</div>
			</div>
		</div>

		<div class="field">
			<label class="label">Other Ground Type</label>
			<div class="control">
				<input class="input" type="text" :value = "outsideList[6]">
			</div>
		</div>

		<!-- Wire Type section -->

		<h4 class="is-size-4">Voltage at Ground Block</h4>

		<div class="field">
			<label class="label">Messenger Wire</label>
			<div class="control">
				<input class="input" type="text" :value = "outsideList[7]">
			</div>
		</div>
		<div class="field">
			<label class="label">Connector</label>
			<div class="control">
				<input class="input" type="text" :value = "outsideList[8]">
			</div>
		</div>
		<div class="field">
			<label class="label">10gauge Ground Wire</label>
			<div class="control">
				<input class="input" type="text" :value = "outsideList[9]">
			</div>
		</div>

    <a class="button is-info">Submit</a>
     </div>
   </div>
</template>

<script>

export default {
    created(){
        this.$store.dispatch('fetchOutside', this.routeId)
    },
   data () {
      return {
          routeId: this.$route.params.id,
      	  tvmodel: '',
        };
   },
   	computed: {
			outsideList(){
			return this.$store.state.outsideValues;
				//outlets: []
		    }
	    },
   methods:{
    onSubmit() {
      
    }
   }
}
</script>
<style>
	h4{
		color: limegreen;
		padding: 5px 0;
	}

</style>