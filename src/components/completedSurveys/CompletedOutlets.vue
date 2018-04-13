<template>
  <div>
    <h3 class="is-size-3">Outlet Completed</h3>
    <img src="../../assets/outlet.png"  alt="outlet" width="150" height="150">
 
    <div class="receiver-field" v-for="(outlet, index) in outletList" :key="index">
      <h4 class="is-size-4">Receiver {{ index + 1 }}</h4>
      <table class="table is-bordered is-striped is-narrow is-fullwidth"> <!-- cellspacing='0' is important, must stay -->

        <!-- Table Header -->
        <thead>
            	
            <tr  class="is-info">
                <th>Resource</th>
                <th>Value</th>
            </tr>
        </thead>
        <!-- Table Header -->

        <!-- Table Body -->
        <tbody>
            <tr>
                <td>Tv Model</td>
                <td> {{outlet.tvmodel}}</td>
            </tr>
            <tr>
                <td>Room</td>
                <td>{{outlet.room}}</td>
            </tr>
            <tr>
                <td>Pronge</td>
                <td>{{outlet.pronge}}</td>
            </tr>
            <tr>
                <td>A Volts</td>
                <td>{{outlet.avolts}}</td>
            </tr>
            <tr>
                <td>B Volts</td>
                <td>{{outlet.bvolts}}</td>
            </tr>
            <tr>
                <td>C Volts</td>
                <td>{{outlet.cvolts}}</td>
             </tr>
            <tr>
                <td>D Volts</td>
                <td>{{outlet.dvolts}}</td>
            </tr>
            <tr>
                <td>E Volts</td>
                <td>{{outlet.evolts}}</td>
            </tr><!-- Table Row -->
        </tbody>
        <!-- Table Body -->

        </table>
    </div>
   </div>
</template>

<script>

export default {
   created(){
      this.$store.dispatch('fetchOutlets', this.routeId)
   }, 
   data () {
     return {
        routeId: this.$route.params.id,
        tvmodel: '',
        pronge: '',
        room: '',
        avolts: '',
        bvolts: '',
        cvolts: '',
        dvolts: '',
        evolts: '',
     };
   },
   	computed: {
			outletList(){
			return this.$store.state.outlets;
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
  .receiver-field{
    margin: 3px 3px 20px 3px;
    padding: 10px;
    border-radius: 4px;
    background-color: #f4f5f7;
    border: 1px solid #d4d5d8;
  }
  .table tbody{
      padding: 5px;
  }

</style>