<script setup lang="ts">
</script>

<template>
	<div >
	    <div :key="index" @mouseover="hoverdIndex = true" @mouseleave="hoverdIndex = false">
	    	<div >
	        	<p class="nameP"> Type: {{ element.type }} </p>
				<div v-if="hoverdIndex">
					<p class="nameP">Id: {{ element.id }}</p>
	        		<p class="nameP">Name: {{ element.name }}</p>
	        		<p class="nameP">{{ element.count }}</p>
				</div>
				
	      	</div>
	    </div>
	</div>
</template>

<script>
export default {
	props:['element', 'index'],
	data(props) {
		console.log(props.index.hoverdIndex)
        return {
			hoverdIndex: props.index.hoverdIndex,
			index: props.index.index,
			element: props.element.element, 
            articles: this.$store.getters.inventory
        };
    }
}
</script>

<style>
.textar{
  size: 1px;
}
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
  width: 240px;
  height: 230px;
  
}
</style>