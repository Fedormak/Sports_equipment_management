<script setup lang="ts">
</script>

<template>
  <header class="header">
    <nav class="header-page">
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/about">Склад</RouterLink>
      <RouterLink to="/adminPan" v-if="isLoggedIn && hasAccess">Заказ</RouterLink>
    </nav>
    <div>
      <div class="login">
        <p v-if="isLoggedIn && hasAccess">Добро пожаловать, {{userName}}!</p>
        <p v-else>...</p>
        <button @click="toggleLogin">
          <p v-if="isLoggedIn && hasAccess">Log out</p>
          <p v-else>Log In</p>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      hasAccess: false,
      userName: 'Фёдор'
    };
  },
  methods: {
    toggleLogin() {
      this.isLoggedIn = !this.isLoggedIn;
      this.hasAccess = !this.hasAccess; // Для тестирования
    }
  }
};
</script>



<style scoped>
.login {
  display: block;
  float: right;
}

.login button{
  float: right;
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