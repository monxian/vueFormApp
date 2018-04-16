<template>
  <div>
    <h3 class="is-size-3">Outside Form</h3>
    <img src="../../assets/outlet.png"  alt="outlet" width="150" height="150">
	<div class="receiver-field">
		<h4 class="is-size-4">Bond</h4>
		<div class="field">
			<div class="control">
				<label class="checkbox">
					<input type="checkbox"  v-model="bondcx" >
					Connected to GB/MS
				</label>
			</div>
		</div>

		<div class="field">
			<div class="control">
				<label class="checkbox">
					<input type="checkbox"  v-model="oducx">
					Connected to ODU
				</label>
			</div>
		</div>

		<div class="field">
			<label class="label">Connection Type</label>
			<div class="control">
				<div class="select" v-model="bondtype">
					<select>
						<option>Strap</option>
						<option>Split Bolt</option>
						<option>Corner Clamp</option>
						<option>Trailer Clamp</option>
					</select>
				</div>
			</div>
		</div>

		<div class="field">
			<label class="label">Other Bond Type</label>
			<div class="control">
				<input class="input" type="text"  v-model="bondother" placeholder="Water pipe conduit etc...">
			</div>
		</div>

		<!-- Grounding section -->

		<h4 class="is-size-4">Ground</h4>
		<div class="field">
			<div class="control">
				<label class="checkbox">
					<input type="checkbox"  v-model="gndcx">
					Connected to GB/MS
				</label>
			</div>
		</div>

		<div class="field">
			<div class="control">
				<label class="checkbox">
					<input type="checkbox"  v-model="gndsource">
					Connected to Ground Source
				</label>
			</div>
		</div>

		<div class="field">
			<label class="label">Connection Type</label>
			<div class="control">
				<div class="select" v-model="gndtype">
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
				<input class="input" type="text" v-model="gndother" placeholder="Water pipe conduit etc...">
			</div>
		</div>

		<!-- Wire Type section -->

		<h4 class="is-size-4">Voltage at Ground Block</h4>

		<div class="field">
			<label class="label">Messenger Wire</label>
			<div class="control">
				<input class="input" type="text" v-model="vmess" placeholder="volts">
			</div>
		</div>
		<div class="field">
			<label class="label">Connector</label>
			<div class="control">
				<input class="input" type="text" v-model="vbarrel"  placeholder="Volts">
			</div>
		</div>
		<div class="field">
			<label class="label">10gauge Ground Wire</label>
			<div class="control">
				<input class="input" type="text" v-model="vgndwire" placeholder="Volts">
			</div>
		</div>

    <a class="button is-info" @click>Submit</a>
     </div>
   </div>
</template>

<script>
export default {
    data () {
        return {
            bondcx: '',
            oducx: '3 oducx',
            bondtype: '',
            bondother: '120',
            gndcx: '',
            gndsource: '',
            gndtype: '',
            gndother: '',
            vmess: '',
            vbarrel: '',
            vgndwire: '',
        };
    },
    methods:{
        onSubmit() {
            const formData ={
                bondcx: this.bondcx,
                oducx: this.oducx,
                bondtype: this.bondtype,
                bondother: this.bondother,
                gndcx: this.gndcx,
                gndsource: this.gndsource,
                gndtype: this.gndtype,
                gndother: this.gndother,
                vmess: this.vmess,
                vbarrel: this.vbarrel,
                vgndwire: this.vgndwire,
            };
            console.log(formData);
            axios.post('/api/Activities/5ac551b87f43c335fd1a5a7e/outlets', formData)
                .then(res => console.log(res))
                .catch(error => console.log(error))
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