<script setup lang="ts">
</script>

<template>
  <header class="header">
    <nav class="header-page">
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/about">Склад</RouterLink>
      <RouterLink to="/adminPan">Заказ</RouterLink>
    </nav>
    <div>
      <div class="login">
          <div v-if='auth'>
            <p> {{userName}}, id: {{id}} </p>
            <button v-on:click="logout">Log out</button>
          </div>
          <div v-else>
            <p>Зайди чтобы работать</p>
            <RouterLink to="/login" class="loginButton"> login </RouterLink>
          </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    if (this.$store.getters.isAuth){
      return {
        auth: this.$store.getters.isAuth,
        userName: this.$store.state.user.loginUser.userName,
        id: this.$store.state.user.loginUser.id,
      }
    }
    return {
      auth: this.$store.getters.isAuth,
      userName: "",
      id: "",
    }
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push({ path: '/login' })
    }
  }
};
</script>



<style scoped>
.login {
  display: block;
  float: right;
}

.loginButton{
  float: right;
  color: #181818;
  font-size: 15px;
}
.header {
  border-bottom: #181818 1px solid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.header-page {
  display: block;
  text-align: center;

}
a {
  display: inline;
  font-size: 20px;
  margin-right: 20px;
}
</style>