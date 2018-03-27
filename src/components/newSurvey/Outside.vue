<template>
  <div>
    <h3 class="is-size-3">Outside Form</h3>
    <img src="../../assets/outlet.png"  alt="outlet" width="150" height="150">
	<div class="receiver-field">
		<h4 class="is-size-4">Bond</h4>
		<div class="field">
			<div class="control">
				<label class="checkbox">
					<input type="checkbox">
					Connected to GB/MS
				</label>
			</div>
		</div>

		<div class="field">
			<div class="control">
				<label class="checkbox">
					<input type="checkbox">
					Connected to ODU
				</label>
			</div>
		</div>

		<div class="field">
			<label class="label">Connection Type</label>
			<div class="control">
				<div class="select">
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
				<input class="input" type="text" placeholder="Water pipe conduit etc...">
			</div>
		</div>

		<!-- Grounding section -->

		<h4 class="is-size-4">Ground</h4>
		<div class="field">
			<div class="control">
				<label class="checkbox">
					<input type="checkbox">
					Connected to GB/MS
				</label>
			</div>
		</div>

		<div class="field">
			<div class="control">
				<label class="checkbox">
					<input type="checkbox">
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
				<input class="input" type="text" placeholder="Water pipe conduit etc...">
			</div>
		</div>

		<!-- Wire Type section -->

		<h4 class="is-size-4">Voltage at Ground Block</h4>

		<div class="field">
			<label class="label">Messenger Wire</label>
			<div class="control">
				<input class="input" type="text" placeholder="volts">
			</div>
		</div>
		<div class="field">
			<label class="label">Connector</label>
			<div class="control">
				<input class="input" type="text" placeholder="Volts">
			</div>
		</div>
		<div class="field">
			<label class="label">10gauge Ground Wire</label>
			<div class="control">
				<input class="input" type="text" placeholder="Volts">
			</div>
		</div>

    <a class="button is-info" @click>Submit</a>
     </div>
   </div>
</template>

<script>
export default {
   
}
</script>
<style>
	h4{
		color: limegreen;
		padding: 5px 0;
	}

</style>