<script setup lang="ts">
import {RouterView} from 'vue-router'
import ComponentHeader from "@/components/ComponentHeader.vue";
</script>

<template>
  <component :is="currentLayout">
    <ComponentHeader />
    <router-view />
  </component>
</template>


<script lang="ts">

import PageHome from "@/page/PageHome.vue";
import LoginPage from "@/components/ComponentLogin.vue"
import ComponentRegister from './components/ComponentRegister.vue';

export default {
  components: {
    HomePage: PageHome,
    RegisterPage: ComponentRegister,
    LoginPage,
  },
  computed: {
    currentLayout() {
      return this.$route.meta.layout || 'MainLayout'; // Default layout
    },
  },
};
</script>