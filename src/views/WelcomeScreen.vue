<!-- src/views/WelcomeScreen.vue -->
<template>
  <div
    class="flex items-center justify-center h-screen bg-white transition-opacity duration-500"
    :class="{ 'opacity-0': faded }"
  >
    <h1 class="text-3xl font-bold text-blue-600 animate-pulse">Welcome to StatLine</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const faded = ref(false)
const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    faded.value = true
    setTimeout(() => {
      router.push('/home')
    }, 500) // wait for fade out transition to complete
  }, 2000) // splash screen duration
})
</script>

<style scoped>
/* Optional: ensure the fade is smooth */
.opacity-0 {
  opacity: 0;
}
</style>
