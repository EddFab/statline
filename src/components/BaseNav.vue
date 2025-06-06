<template>
  <nav
    class="fixed bottom-4 left-0 right-0 bg-white shadow-md flex justify-around py-3 z-50 rounded-t-xl mx-4"
  >
    <RouterLink
      to="/home"
      class="flex flex-col items-center text-sm"
      :class="{ 'text-blue-600': isActive('/home') }"
    >
      <span class="text-xl">🏠</span>
      <span>Home</span>
    </RouterLink>
    <RouterLink
      to="/search"
      class="flex flex-col items-center text-sm"
      :class="{ 'text-blue-600': isActive('/search') }"
    >
      <span class="text-xl">🔍</span>
      <span>Search</span>
    </RouterLink>
    <RouterLink
      to="/tracker"
      class="flex flex-col items-center text-sm"
      :class="{ 'text-blue-600': isActive('/tracker') }"
    >
      <span class="text-xl">📊</span>
      <span>Tracker</span>
    </RouterLink>
    <RouterLink
      to="/settings"
      class="flex flex-col items-center text-sm"
      :class="{ 'text-blue-600': isActive('/settings') }"
    >
      <span class="text-xl">⚙️</span>
      <span>Settings</span>
    </RouterLink>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const isActive = (path) => route.path === path
</script>
