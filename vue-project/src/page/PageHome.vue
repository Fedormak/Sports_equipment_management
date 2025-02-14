<script setup lang="ts">
</script>

<template>
  <main>
    <h1>Привет, {{ userName }}!</h1>
    <!-- <h2>Тут ты можешь посмотреть на свои действия</h2>
    <div>
      <h3>Твои запросы:</h3>
      <ul >
        <li v-for="elem in Equpment">
          <h1>{{ elem }}</h1>
        </li>
      </ul>
    </div>
    <div>

    </div> -->
  </main>
</template>

<script>
export default {
  data() {
    let userData = this.$store.getters.getUser
    console.log(userData.user_id)
  //   let Equpment : any = [1, 2, 3]; (Array as Array<any>) = this.$store.dispatch("getAllEqupmentByOneUser", {user_id: userData.user_id})

  //   const resultObject = {}

  //   const d = this.Equpment.forEach((item) => {
  //     resultObject[item.user_id] = {
  //       item_id: item.item_id,
  //       user_id: item.req_id,
  //       comment: item.comment,
  //   };
  // });
    return {
      userName: userData.login_,
      // Equpment: this.dataUser
    }
  }
}
</script>

<style scoped>
</style>