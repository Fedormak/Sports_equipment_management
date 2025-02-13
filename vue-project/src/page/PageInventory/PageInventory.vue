<script setup lang="ts">
</script>

<template>
  <div>
    <RouterLink to="/inventory/createElement" v-if="isAdmin" >Add new element</RouterLink>
    <div>
      <div v-if="auth" v-for="element in articles" class="card-item" >
        <item :element="{element}"/>
        <button v-on:click="delIem(element.item_id)">DEl mi</button>
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
            isAdmin: this.$store.getters.isAdmin,
            chooseElement: null,
            hoverdIndex: false,
            auth: this.$store.getters.isAuth,
            itemsPerRow: 3,
            articles: this.$store.getters.inventory
        };
    },
    hoverdIndex: false,
    components: { item, RouterLink },
    methods:{
      delIem(item_id) {
        this.$store.dispatch("delItem", {item_id: Number(item_id)})
        this.$store.dispatch("getAllTicket")
        setTimeout(()=>{
          this.articles = this.$store.getters.inventory
        }, 100)
      }
    }
    // =)
}
</script> 


<style>

</style>
