<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6">
    <img src="/logo.png" alt="Statline logo" class="w-32 h-auto mx-auto mb-6" />
    <h1 class="text-4xl font-bold text-blue-600 mb-4">Welcome to StatLine</h1>
    <p class="text-gray-700 text-lg mb-8">Your edge in sports analytics and predictions.</p>
    <button
      @click="goToHome"
      class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300"
    >
      Enter App
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goToHome = () => {
  router.push('/home')
}
</script>
