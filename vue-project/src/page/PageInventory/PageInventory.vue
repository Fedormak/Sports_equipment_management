<script setup lang="ts">
</script>

<template>
  <div>
    <RouterLink to="/inventory/createElement" >Add new element</RouterLink>
    <div>
      <div v-if="auth" v-for="(element, index) in articles" class="card-item" >
        <item :element="{element}" :index="{index, hoverdIndex, chooseElement}"/>
      </div>
      
    </div>
    
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import item from './modulePageInventory/item.vue'
export default {
    data() {
      this.$store.dispatch('allEquipment')
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
    components: { item, RouterLink }
}
</script>


<style>

</style>
