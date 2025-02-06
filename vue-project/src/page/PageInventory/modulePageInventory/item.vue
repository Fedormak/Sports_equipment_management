<script setup lang="ts">
</script>

<template>
	<RouterLink :to="{ path: '/inventory/' + element.id}" class="routerlink" >
	    <div @mouseover="hoverdIndex = true" @mouseleave="hoverdIndex = false">
	    	<div >
	        	<h2 class="nameP">{{ element.name }}</h2>
				<h3 class="nameP">{{ element.type }}</h3>
			</div>
	    </div>
	</RouterLink>
</template>

<script>
export default {
	props:['element', 'index'],
	data(props) {
        return {
			chooseElement: props.index.chooseElement,
			hoverdIndex: props.index.hoverdIndex,
			index: props.index.index,
			element: props.element.element, 
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