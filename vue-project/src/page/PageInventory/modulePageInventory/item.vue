<script setup lang="ts">
</script>

<template>
  <div >
    <div v-if="isAdmin">
      <RouterLink :to="{ path: '/inventory/' + element.item_id}" class="routerlink" >
	    <div>
	    	<div >
          <h2> {{elementsd.name_item}} </h2>
	        	<h2>{{elementsd.item_id}}</h2>
			  </div>
        
	    </div>
	  </RouterLink>
    </div>
    <div v-else>
      <div >
	    	<div >
          <h2> {{elementsd.name_item}} </h2>
          <h2>{{elementsd.item_id}}</h2>
			  </div>
	    </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["element"],
	data(props) {
        return {
          isAdmin: this.$store.getters.isAdmin,
			    // index: props.index,s
          elementsd: this.element.element,
        };
    }
}
</script>

<style>
.routerlink{
	width: 100%;
	height: 100%;
}

.textar{
  size: 1px;
}
.nameP{
  word-break: break-all;
  color: black;
}

.deck{
  display: inline-block;
}
.card-item{
  display: inline-block;
  width: 100%;
  height: 100%;
  vertical-align: top;
  margin-top: 2px ;
  margin-left: 2px;
  background-color: aquamarine;
  border: 1px solid black;
  width: 240px;
  height: 230px;
  
}
</style>