<script setup lang="ts">

</script>

<template>
    <div>
        <RouterLink to="/">Главная</RouterLink>
        <div class="RegisterForm">
            <h3>Regiser</h3>
            <div class="container">
                <textarea type="text" v-model="login" placeholder="login"/>
                <textarea type="text" v-model="password" placeholder="password"/>
            </div>
            <button v-on:click="register">register</button>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
          login: "",
          password: "",
        }
    },
    methods: {
        register() {
            this.$store.commit('dataWritter', {login: this.login, password: this.password})
            this.$store.dispatch('register')
            this.$router.replace({name: 'login'})
        }
    }
}
</script>

<style scoped>
textarea {
  resize: none;
}

.RegisterForm {
  width: 400px;
  height: 400px;
  margin: 0 auto;
  text-align: center;
}
</style>