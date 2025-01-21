<template>
  <div>
    <nav class="header-nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'ComponentHeader'
}
</script>
<style scoped>
.header-nav {
  border-bottom: #181818 1px solid;
}
</style>