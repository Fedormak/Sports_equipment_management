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
    </div>
    <div>
      <h3>Введенная информация</h3>
      <p>Логин: {{login}}</p>
      <p>Пароль: {{password}}</p>

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
      this.$store.commit('login', {login: this.login, password: this.password});
      this.$store.dispatch("fetchData")
      setTimeout(()=>{
        this.$router.replace({name: 'home'})
      }, 2000)
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