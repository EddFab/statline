<template>
  <div
    class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-end justify-center"
    @click.self="close"
  >
    <div class="bg-white w-full rounded-t-2xl p-4 pb-10 max-h-[70%] overflow-y-auto shadow-lg">
      <div class="w-12 h-1.5 bg-gray-300 rounded mx-auto mb-4"></div>
      <p class="text-center text-sm text-gray-500 mb-2">Modal is open</p>
      <h2 class="text-center text-xl font-bold mb-4">Game Detail</h2>

      <div class="flex justify-between items-center px-4">
        <div class="flex-1 text-center">
          <img :src="gameData.value.homeLogo" alt="Home Logo" class="w-10 h-10 mx-auto mb-1" />
          <p class="font-semibold">{{ gameData.value.homeName }}</p>
          <p class="text-2xl font-bold text-blue-600">{{ gameData.value.homeScore }}</p>
        </div>

        <div class="text-center mx-4">
          <p class="text-gray-600 text-sm mb-1">{{ gameData.value.status }}</p>
          <p class="text-gray-500 text-xs">Start Time: {{ gameData.value.startTime }}</p>
        </div>

        <div class="flex-1 text-center">
          <img :src="gameData.value.awayLogo" alt="Away Logo" class="w-10 h-10 mx-auto mb-1" />
          <p class="font-semibold">{{ gameData.value.awayName }}</p>
          <p class="text-2xl font-bold text-blue-600">{{ gameData.value.awayScore }}</p>
        </div>
      </div>

      <div class="flex justify-between text-center mt-6 px-8">
        <div>
          <p class="text-gray-500 text-sm">Standings</p>
          <p class="font-bold">{{ gameData.value.homeRecord }}</p>
        </div>
        <div>
          <p class="text-gray-500 text-sm">Standings</p>
          <p class="font-bold">{{ gameData.value.awayRecord }}</p>
        </div>
      </div>

      <div class="mt-6 px-4 text-sm text-gray-700 space-y-2">
        <div class="flex justify-between">
          <span class="font-medium text-gray-600">Venue:</span>
          <span>{{ gameData.value.venue }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium text-gray-600">Broadcast:</span>
          <span>{{ gameData.value.broadcast }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium text-gray-600">Game Type:</span>
          <span>{{ gameData.value.type }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  game: Object,
  close: Function,
})

const gameData = computed(() => props.game || {})
</script>
