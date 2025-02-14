<script setup lang="ts">
</script>

<template>

  <div class="loginForm">
    <h2>Заригестрироваться</h2>
    <div class="container">
      <textarea type="text" v-model="login" placeholder="логин"/>
      <textarea type="text" v-model="password" placeholder="пароль"/>
    </div>
    <button v-on:click="loginPush">Создать</button>
    <RouterLink to="/">Есть аккаунт?</RouterLink>
    </div>
</template>

<script>
export default {
    data() {
        return {
            login: "",
            password: ""
        }
    },
    methods: {
        loginPush() {
            this.$store.commit("dataForAuth", {login: this.login, password: this.password})
            this.$store.dispatch("register")
            this.$router.replace({name: 'login'})
        }
    } 
}
</script>

<style>
textarea {
  resize: none;
}

.loginForm {
  width: 400px;
  height: 400px;
  margin: 0 auto;
  text-align: center;
}
</style>