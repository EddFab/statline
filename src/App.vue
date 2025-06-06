<script setup>
import { useRoute } from 'vue-router'
import BaseNav from './components/BaseNav.vue'
</script>

<template>
  <div class="min-h-screen pb-16">
    <RouterView />
    <BaseNav v-if="!isWelcome" />
  </div>
</template>

<script setup>
const route = useRoute()
const isWelcome = route.path === '/'
</script>
