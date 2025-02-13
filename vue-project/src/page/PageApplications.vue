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
      <div class="for-form">
        <div class="form">
          <input class="input" v-on:keyup.enter="CreateApplication" v-model="commit" type="text" placeholder="опишите зачем вам">
          <input class="input"  v-on:keyup.enter="CreateApplication" v-model="item_id" type="text" placeholder="Id предмета">
          <button class="input" v-on:click="CreateApplication"> создать заявку</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script> 
export default {
  data() {
      return {
        name: "",
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

      this.name = "",
      this.item_id = ""

    },
    doneApplication(user_id,req_id, item_id) {
      this.$store.dispatch("doneApplication", {user_id:user_id ,req_id:req_id, item_id:item_id, })
      this.$store.dispatch("getReplacment")

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
.form {
  display: block;
}
.for-form{
  width: 40vh;
}
.input{
  display: block;
  outline: none;
  border-radius: 5px;
  width: 200px;
  margin-top: 8px;
}

</style>
