<template>
  <div>
    <h3 class="is-size-3">Outlet Form</h3>
    <img src="../../assets/outlet.png"  alt="outlet" width="150" height="150">
 
    <div class="receiver-field">
      <h4 class="is-size-4">Receiver {{ counter }}</h4>
      <div class="field">
        <p class="help">Tv/Model</p>
        <div class="control">
          <input class="input" type="text" v-model="tvmodel" placeholder="tv model">
        </div>
      </div>
      <div class="field">
        <p class="help">Tv Plug Type</p>
        <div class="control">
          <div class="select">
            <select v-model="pronge">
              <option>3 pronge</option>
              <option>2 pronge</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <p class="help">Room</p>
        <div class="control">
          <input class="input" type="text" v-model="roomname" placeholder="living Room">
        </div>
      </div>
      <div class="field">
        <p class="help">A(volts)</p>
        <div class="control">
          <input class="input" type="text" v-model="avolts" placeholder="120v">
        </div>
      </div>
      <div class="field">
        <p class="help">B(volts)</p>
        <div class="control">
          <input class="input" type="text" v-model="bvolts" placeholder="<0.5v">
        </div>
     </div>
     <div class="field">
        <p class="help">C(volts)</p>
        <div class="control">
          <input class="input" type="text" v-model="cvolts" placeholder="120v">
        </div>
     </div>
     <div class="field">
        <p class="help">D(volts)</p>
        <div class="control">
          <input class="input" type="text" v-model="dvolts" placeholder="<0.5v">
        </div>
      </div>
      <div class="field">
        <p class="help">E(volts)</p>
        <div class="control">
          <input class="input" type="text" v-model="evolts" placeholder="<85v">
        </div>
     </div>
     <a class="button is-info" v-on:click="onSubmit">Submit</a>
    </div>
  </div>
  </template>

<script>
import axios from 'axios';

export default {
   props: ['counter'],
   data () {
     return {
        tvmodel: '',
        pronge: '3 pronge',
        roomname: '',
        avolts: '',
        bvolts: '',
        cvolts: '',
        dvolts: '',
        evolts: '',
     };
   },
   methods:{
    onSubmit() {
      const formData ={
        tvmodel: this.tvmodel,
        pronge: this.pronge,
        roomname: this.roomname,
        avolts: this.avolts,
        bvolts: this.bvolts,
        cvolts: this.cvolts,
        dvolts: this.dvolts,
        evolts: this.evolts,
      }
      console.log(formData);
      axios.post('/test.json', formData)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
   }
}
</script>
<style>
  .receiver-field{
    margin: 3px 3px 20px 3px;
    padding: 5px;
    background-color: #f4f5f7;
    border-radius: 4px;
    border: 1px solid #d4d5d8;

  }

</style>