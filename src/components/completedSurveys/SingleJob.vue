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
import axios from 'axios';

import Header from '../Hearder.vue';
import Outlet from '../newSurvey/Outlets.vue';
import Outside from '../newSurvey/Outside.vue';
import Problems from '../newSurvey/ProblemsList.vue';
import Equipment from '../newSurvey/EquipmentList.vue';

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
        this.tvmodel = formInfo[0].tvmodel
        this.roomname = formInfo[0].roomname
      })
      .catch(error => console.log(error))
  },
  data: function(){
    return {
      selectedComponent: 'appOutlet',
      tvmodel: '',
      roomname: '',
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

 .container{

}

.level{
  margin:  0;
}
a {
  color: #42b983;
}
</style>