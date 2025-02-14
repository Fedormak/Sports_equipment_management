<script setup lang="ts">
</script>

<template>
  <div >
    <RouterLink to="/inventory/createElement" v-if="isAdmin" >Add new element</RouterLink>
    <div>
      <div v-for="element in articles" class="card-item" :key="element.item_id" 
       @mouseover="upHere = element.item_id" 
       @mouseleave="upHere = null" >
        <item :element="{element}"/>
        <button  v-if="element.item_id === upHere && isAdmin" v-on:click="delIem(element.item_id)">del</button>
      </div>
      
    </div>
    
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import item from './modulePageInventory/item.vue'
export default {
    data() {
        return {
            upHere: null,
            isAdmin: this.$store.getters.isAdmin,
            chooseElement: null,
            hoverdIndex: false,
            itemsPerRow: 3,
            articles: this.$store.getters.inventory,
            hoveredItem: null
        };
    },
    components: { item, RouterLink },
    methods:{
      delIem(item_id) {
        console.log(item_id, "del mw")
        this.$store.dispatch("delItem", {item_id: Number(item_id)})
        this.$store.dispatch("getAllTicket")
        setTimeout(()=>{
          
          this.articles = this.$store.getters.inventory
        }, 300)
      },
      handleMouseOver(item) {
      this.hoveredItem = item;
      },
      handleMouseLeave(item) {
        this.hoveredItem = null;
      }
    }
    // =)
}
</script> 


<style>

</style>
