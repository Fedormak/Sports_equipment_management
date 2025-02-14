<script setup lang="ts">
</script>

<template>
  <main>
    <h1>Привет, {{ userName }}!</h1>
    <h2>Тут ты можешь посмотреть на свои действия</h2>
    <div>
      <h3>Твои запросы:</h3>
      <ul v-for="elem in Equpment">
        {{ elem }}
      </ul>
    </div>
    <div>

    </div>
  </main>
</template>

<script>
export default {
  data() {
    let userData = this.$store.getters.getUser
    console.log(userData.user_id)
    let Equpment = this.$store.dispatch("getAllEqupmentByOneUser", {user_id: userData.user_id})
    console.log(Equpment)
    return {
      userName: userData.login_,
      Equpment: Equpment
    }
  }
}
</script>

<style scoped>
</style>