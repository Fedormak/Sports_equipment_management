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

import HomePage from "@/page/HomePage.vue";
import LoginPage from "@/components/ComponentLogin.vue"

export default {
  components: {
    HomePage,
    LoginPage,
  },
  computed: {
    currentLayout() {
      return this.$route.meta.layout || 'MainLayout'; // Default layout
    },
  },
};
</script>