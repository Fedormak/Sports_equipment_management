<script setup lang="ts">

</script>

<template>
  <div>
    <div v-if="isAdmin">
      <h1>Заявки:</h1>
      <ul>
        <li v-for="element in allApplication">
          {{element.name}}, {{element.discription}}, {{element.idItems}}, {{element.idUser}}
          <button v-on:click="null">Yes</button>
          <button v-on:click="null">No</button>
        </li>
      </ul>
    </div>


    <div v-else >
      <div>
        <input v-model="commit" type="text" placeholder="опишите засем вам">
        <input v-model="id_item" type="text" placeholder="Id предмета">
        <button v-on:click="CreateApplication"> создать заявку</button>
      </div>
      <ul>
        <li v-for="element in ApplicationUser">
          {{ element }}
        </li>
      </ul>
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
        allApplication: this.$store.getters.getAllticket,
        ApplicationUser: this.$store.getters.getApplicationUser

      }
  },
  methods: {
    CreateApplication() {
      this.$store.commit("repairDataToCreateNewApplication", {commet: this.commit, item_id: Number(this.item_id)})
      this.$store.dispatch("createApplication")

    },
    doneApplication() {
      this.$store.commit("repairDataToCreateNewApplication", {commit: this.commit, item_id: this.item_id, id_user: this.idUser})
      this.allApplication = this.$store.getters.getAllApplication
    }
  }
}

</script>

<style>
</style>
