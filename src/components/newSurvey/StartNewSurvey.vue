<template>
  <div class="container">
     <app-header></app-header>
    <div class="level">
      <button class="button is-item is-info is-small" @click="selectedComponent = 'appOutlet'">Inside</button>
      <button class="button is-item is-info is-small" @click="selectedComponent = 'appOutside'">Outside</button>
      <button class="button is-item is-info is-small" @click="selectedComponent = 'appProblems'">Problems</button>
      <button class="button is-item is-info is-small" @click="selectedComponent = 'appEquipment'">Equipment</button>
    </div>
    
    <keep-alive>
      <component :is="selectedComponent">
  		    <p>Default content</p>
      </component>
    </keep-alive>
  </div>
</template>

<script>
import Header from '../Hearder.vue';
import Outlet from './Outlets.vue';
import Outside from './Outside.vue';
import Problems from './ProblemsList.vue';
import Equipment from './EquipmentList.vue';

export default {
  
  data: function(){
    return {
      selectedComponent: 'appOutlet'
    }
  },
  components:{
    appOutlet: Outlet,
    appOutside: Outside,
    appProblems: Problems,
    appEquipment: Equipment,
    appHeader: Header,
     
  },
  methods: {

  }
  
}
</script>

<style scoped>

.level{
  margin:  10px 0;
}
a {
  color: #42b983;
}
</style>
