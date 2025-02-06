<script setup lang="ts">
</script>

<template>
  <div>
    <div>
      <h1 v-if="chooseElement !== null">{{  }}</h1>
      <div v-if="auth" v-for="(element, index) in articles" class="card-item" >
        <item :element="{element}" :index="{index, hoverdIndex, chooseElement}"/>
      </div>
      
    </div>
    
  </div>
</template>

<script>
import item from './modulePageInventory/item.vue'
export default {
    data() {
        return {
            chooseElement: null,
            hoverdIndex: false,
            articles: this.$store.getters.inventory,
            auth: this.$store.getters.isAuth,
            itemsPerRow: 3,
            articles: this.$store.getters.inventory
        };
    },
    hoverdIndex: false,
    components: { item }
}
</script>


<style>

</style>
