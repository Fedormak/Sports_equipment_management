<script setup lang="ts">
</script>

<template>
  <div class="deck">

    <div class="card-item">
      <img />
      <p>name</p>
      <p>type</p>
      <p>count</p>
    </div>
    <div class="card-item">
      <img />
      <p>name</p>
      <p>type</p>
      <p>count</p>
    </div>

  </div>
</template>

<script>
new Vue({
  el: '#app',

  data: {
    item1:[12, 10, 9, 5, 6, 4],
  },

  methods:{
    myFunction: function () {
      n = this.item1.map(this.testFunction);
    },
    testFunction: function(num) {
      return num*this.myModel;
    }
  }

});
</script>


<style>
.deck{
  display: inline-block;
}
.card-item{
  display: inline-block;
  margin: 0 5px 0 5px ;
  background-color: darkgray;
  width: 130px;
  height: 200px;
}
</style>
