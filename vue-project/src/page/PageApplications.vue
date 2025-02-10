<script setup lang="ts">

</script>

<template>
  <div>
    <div v-if="isAdmin">
      <h1>Заявки:</h1>
      <ul>
        <li v-for="element in allApplication">
          {{element.req_id}} - {{element.comment}} id предмета:{{element.item_id}} - запросил: {{element.user_id}}
          <button v-on:click="doneApplication(element.user_id, element.req_id, element.item_id)">Yes</button>
          <button v-on:click="UnDoneApplication(element.req_id)">No</button>
        </li>
      </ul>
    </div>


    <div v-else >
      <div>
        <input v-model="commit" type="text" placeholder="опишите зачем вам">
        <input v-model="item_id" type="text" placeholder="Id предмета">
        <button v-on:click="CreateApplication"> создать заявку</button>
      </div>
    </div>
  </div>
</template>

<script> 
export default {
  data() {
      return {
        name: "",
        commit: "",
        item_id: "",
        isAdmin: this.$store.getters.isAdmin,
        allApplication: this.$store.getters.getAllApplication,
        ApplicationUser: this.$store.getters.getApplicationUser

      }
  },
  methods: {
    CreateApplication() {
      this.$store.commit("repairDataToCreateNewApplication", {commet: this.commit, item_id: Number(this.item_id)})
      this.$store.dispatch("createApplication")

    },
    doneApplication(user_id,req_id, item_id) {
      console.log(user_id,req_id, item_id)
      this.$store.dispatch("doneApplication", {user_id:user_id ,req_id:req_id, item_id:item_id, })
      
      setTimeout(()=>{
        this.allApplication = this.$store.getters.getAllApplication
      }, 1000)
    },
    UnDoneApplication(req_id) {
      this.$store.dispatch("unDoneApplication", {req_id: req_id})
      this.$store.dispatch("getReplacment")

      setTimeout(()=>{
        this.allApplication = this.$store.getters.getAllApplication
      }, 1000)
    }
  }
}

</script>

<style>
</style>
