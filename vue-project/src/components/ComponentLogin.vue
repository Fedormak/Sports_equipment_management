<script setup lang="ts">

</script>

<template>
  <div>
    <RouterLink to="/">Главная</RouterLink>
    <div class="loginForm">
      <h3>Login In</h3>
      <div class="container">
        <textarea type="text" v-model="login" placeholder="login"/>
        <textarea type="text" v-model="password" placeholder="password"/>
      </div>
      <button v-on:click="loginPush">Login</button>
      <RouterLink to="/register">Нет аккаунта?</RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      login:'',
      password:'',
    }
  },
  methods: {
    loginPush(){
      this.$store.commit('dataWritter', {login: this.login, password: this.password});
      this.$store.dispatch("login")
      setTimeout(()=>{
        this.$router.replace({name: 'home'})
      }, 500)
      ;
    }
  }
}
</script>

<style scoped>
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