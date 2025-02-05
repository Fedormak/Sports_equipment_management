<script setup lang="ts">
</script>

<template>
  <div>
    <div v-for="element in articles" class="card-item">
      <div>
        <p class="nameP">Id: {{ element.id }}</p>  
        <p class="nameP">Type: {{ element.type }}</p>
        <p class="nameP">Name: {{ element.name }}</p>
        <p class="nameP">{{ element.count }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {

    return {
      itemsPerRow: 3,
      articles: this.$store.getters.inventory
    }
  },
}
</script>


<style>
.nameP{
  word-break: break-all;
}

.deck{
  display: inline-block;
}
.card-item{
  display: inline-block;
  vertical-align: top;
  margin-top: 2px ;
  margin-left: 2px;
  background-color: darkgray;
  border: 1px solid black;
  width: 140px;
  height: 200px;
}
</style>
