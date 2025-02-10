<script setup lang="ts">

</script>

<template>
  <div class="header">
    <div>
      <h1>Запросы</h1>
      <ul>
        <li v-for="elem in allRequest">
          {{ elem.name_item }}, {{ elem.price }}, {{ elem.name_provider }}
        </li>
      </ul>
    </div>
    <div>
      <h2>создать запрос на покупку</h2>
      <div>
        <h4>name_item</h4>
        <input type="text" v-model="nameItem" >
        <h4>name_provider</h4>
        <input type="text" v-model="nameProvider" >
        <h4>price int</h4>
        <input type="int" v-model="price" >
      </div>
      <button v-on:click="createPlan">data</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    console.log(this.$store.getters.getPlanBuy)
    return {
      nameItem: "",
      nameProvider: "",
      price: "",
      allRequest: this.$store.getters.getPlanBuy
    }
  },
  methods: {
    createPlan() {
      let data = {
        name_item: this.nameItem,
        name_provider: this.nameProvider,
        price: this.price
      }
      this.$store.getters.updateDataPlan(data)
      this.$store.dispatch("createPlanData")
      this.$store.dispatch("getAllPlanBuy")
      this.nameItem = ""
      this.nameProvider = ""
      this.price = ""
      setTimeout(()=>{
        this.allRequest = this.$store.getters.getPlanBuy
      }, 1000)
      
    }
  }
}
</script>

<style>
.header {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>