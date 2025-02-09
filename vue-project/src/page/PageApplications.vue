<script setup lang="ts">

</script>

<template>
  <div>
    <div v-if="isAdmin">
      <ul>
        <li v-for="element in allApplication">
          {{element.name}}, {{element.discription}}, {{element.idItems}}, {{element.idUser}}
          <button v-on:click="doneApplication(element.id)">Yes</button>
          <button v-on:click="">No</button>
        </li>
      </ul>
    </div>


    <div v-else >
      <div>
        <input v-model="name" type="text" placeholder="название предмета на получение">
        <input v-model="discription" type="text" placeholder="опишите засем вам">
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
    let id = this.$store.getters.getUserId
      return {
        name: "",
        discription: "",
        id_item: "",
        ApplicationUser: this.$store.getters.getUserApplication(id),
        idUser: id,
        isAdmin: this.$store.getters.isAdmin,
        allApplication: this.$store.getters.getAllApplication,
      }
  },
  methods: {
    CreateApplication() {
      this.$store.commit("createApplication", {
        discription: this.discription,
        name: this.name,
        id_items: this.id_item,
        id_user: this.idUser
      })
    },
    doneApplication(id) {
      this.$store.commit("doneApplication", {id: id,id_items: this.id_item,id_user: this.idUser})
      this.allApplication = this.$store.getters.getAllApplication
    }
  }
}

</script>

<style>
</style>
