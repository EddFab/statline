<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around py-2 z-50">
    <RouterLink
      to="/home"
      class="flex flex-col items-center text-sm"
      :class="{ 'text-blue-600': isActive('/home') }"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M3 12l9-9 9 9M9 21V9h6v12" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <span>Home</span>
    </RouterLink>
    <RouterLink
      to="/search"
      class="flex flex-col items-center text-sm"
      :class="{ 'text-blue-600': isActive('/search') }"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" stroke-linecap="round" stroke-linejoin="round" />
        <line
          x1="21"
          y1="21"
          x2="16.65"
          y2="16.65"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>Search</span>
    </RouterLink>
    <RouterLink
      to="/tracker"
      class="flex flex-col items-center text-sm"
      :class="{ 'text-blue-600': isActive('/tracker') }"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path
          d="M4 6h4v12H4zM10 10h4v8h-4zM16 2h4v18h-4z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>Tracker</span>
    </RouterLink>
    <RouterLink
      to="/settings"
      class="flex flex-col items-center text-sm"
      :class="{ 'text-blue-600': isActive('/settings') }"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" />
        <path
          d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 9 5.6V5a2 2 0 0 1 4 0v.09c0 .7.4 1.34 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06c-.48.48-.63 1.18-.33 1.82.3.64.99 1.02 1.69 1.01h.09a2 2 0 0 1 0 4h-.09c-.7 0-1.34.4-1.51 1z"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>Settings</span>
    </RouterLink>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const isActive = (path) => route.path === path
</script>
