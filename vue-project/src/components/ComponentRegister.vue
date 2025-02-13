<script setup lang="ts">
</script>

<template>

    <RouterLink to="/">Вернуться</RouterLink>
    <div class="loginForm">
      <h3>Login In</h3>
      <div class="container">
        <textarea type="text" v-model="login" placeholder="login"/>
        <textarea type="text" v-model="password" placeholder="password"/>
      </div>
      <button v-on:click="loginPush">Login</button>
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