<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import BaseNav from './components/BaseNav.vue'

const route = useRoute()
const isWelcome = computed(() => route.path === '/')
</script>

<template>
  <div class="min-h-screen pb-16">
    <RouterView />
    <BaseNav v-if="!isWelcome" />
  </div>
</template>
