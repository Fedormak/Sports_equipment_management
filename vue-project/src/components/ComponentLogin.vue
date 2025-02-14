<script setup lang="ts">

</script>

<template>
  <div class="loginfon">
    <div class="loginForm">
      <h2>Вход в систему</h2>
      <div class="container">
        <textarea type="text" v-model="login" placeholder="Логин"/>
        <textarea type="text" v-model="password" placeholder="Пароль"/>
      </div>
      <button v-on:click="loginPush">Войти</button>
      <RouterLink to="/register">Нет аккаунта?</RouterLink>
    </div>
    <div v-if="!islogin" class="Error">
      <h2>Неверный пароль или логин. Попробуйте ещё раз</h2>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      islogin:true,
      login:'',
      password:'',
    }
  },
  methods: {
    loginPush(){
      this.$store.commit('dataForAuth', {login: this.login, password: this.password});
      this.login = '',
      this.password = ''
      this.$store.dispatch("login")
      setTimeout(() => {console.log(
        this.$store.getters.isAuth)
        this.islogin = this.$store.getters.isAuth}, 200)

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
.Error {
  color: red;
}

.loginForm {
  width: 400px;
  height: 100%;
  margin: 0 auto;
  text-align: center;
}
</style>