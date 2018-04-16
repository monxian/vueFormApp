<template>
    <div>
        <appHeader></appHeader>
        <form @submit.prevent="onSubmit">
            <div class="field signin-form">
                <label class="label">Activity Name</label>
                <div class="control">
                    <input class="input" v-model="actName" type="text" placeholder="e.g cust name or activity number">
                </div>

            </div>
            <div class="level">
                <a class="button is-success" @click="onSubmit">
                    <span class="icon is-small">
                      <i class="fas fa-check"></i>
                    </span>
                    <span>Begin</span>
                </a>
                <a class="button is-danger" @click="onCancel">
                    <span>Cancel</span>
                    <span class="icon is-small">
                      <i class="fas fa-times"></i>
                    </span>
                </a>
            </div>
        </form>
    </div>
</template>

<script>
import Header from '../Hearder.vue';
export default {
  data () {
    return {
      actName: '',
    };
  },
  components: {
      appHeader: Header,
  },
  methods:{
     onSubmit() {
       const formData = {
         actName: this.actName,
         userId: localStorage.getItem('userId'),
       }
      // console.log(formData)
      this.$store.dispatch('newSurveyPost', formData)
     },
     onCancel(){
         this.$router.push('/home')
    }
  }
}
</script>

<style scoped>

</style>
