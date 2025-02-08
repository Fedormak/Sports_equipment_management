<script setup lang="ts">
</script>

<template>
  <div >
    <div v-if="isAdmin">
      <RouterLink :to="{ path: '/inventory/' + id}" class="routerlink" >
	    <div @mouseover="hoverdIndex = true" @mouseleave="hoverdIndex = false">
	    	<div >
	        	<h2 class="nameP">{{ name }}</h2>
				    <h3 class="nameP">{{ type }}</h3>
            <h2 class="nameP">id: {{ id }}</h2>
			  </div>
	    </div>
	  </RouterLink>
    </div>
    <div v-else>
      <div @mouseover="hoverdIndex = true" @mouseleave="hoverdIndex = false">
	    	<div >
	        	<h2 class="nameP">{{ name }}</h2>
				    <h3 class="nameP">{{ type }}</h3>
            <h2 class="nameP"> id: {{ id }}</h2>
			  </div>
	    </div>
    </div>
  </div>
</template>

<script>
export default {
	props:['element', 'index'],
	data(props) {
        return {
          isAdmin: this.$store.getters.isAdmin,
			    chooseElement: props.index.chooseElement,
			    hoverdIndex: props.index.hoverdIndex,
			    // index: props.index,s
          type: props.element.element.type,
          name: props.element.element.name,
			    id: props.element.element.id,
          articles: this.$store.getters.inventory
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