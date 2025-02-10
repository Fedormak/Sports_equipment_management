<script setup lang="ts">

</script>

<template>
  <div>
    <ul>
      <li v-for="item in logs">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    console.log(this.$store.getters.getlogi)
    return {
      logs: this.$store.getters.getlogi
    }
  }
}
</script>

<style scoped>

</style>