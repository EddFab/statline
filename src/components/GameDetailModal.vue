<template>
  <div
    class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-end justify-center"
    @click.self="close"
  >
    <div class="bg-white w-full rounded-t-2xl p-4 pb-10 max-h-[70%] overflow-y-auto shadow-lg">
      <div class="w-12 h-1.5 bg-gray-300 rounded mx-auto mb-4"></div>
      <h2 class="text-center text-xl font-bold mb-4">Game Detail</h2>

      <div class="flex justify-between items-center px-4">
        <div class="flex-1 text-center">
          <img :src="game.homeLogo" alt="Home Logo" class="w-10 h-10 mx-auto mb-1" />
          <p class="font-semibold">{{ game.homeName }}</p>
          <p class="text-2xl font-bold text-blue-600">{{ game.homeScore }}</p>
        </div>

        <div class="text-center mx-4">
          <p class="text-gray-600 text-sm mb-1">{{ game.status }}</p>
          <p class="text-gray-500 text-xs">Start Time: {{ game.startTime }}</p>
        </div>

        <div class="flex-1 text-center">
          <img :src="game.awayLogo" alt="Away Logo" class="w-10 h-10 mx-auto mb-1" />
          <p class="font-semibold">{{ game.awayName }}</p>
          <p class="text-2xl font-bold text-blue-600">{{ game.awayScore }}</p>
        </div>
      </div>

      <div class="flex justify-between text-center mt-6 px-8">
        <div>
          <p class="text-gray-500 text-sm">Standings</p>
          <p class="font-bold">{{ game.homeRecord }}</p>
        </div>
        <div>
          <p class="text-gray-500 text-sm">Standings</p>
          <p class="font-bold">{{ game.awayRecord }}</p>
        </div>
      </div>

      <div class="mt-6 px-4 text-sm text-gray-700 space-y-2">
        <div class="flex justify-between">
          <span class="font-medium text-gray-600">Venue:</span>
          <span>{{ game.venue }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium text-gray-600">Broadcast:</span>
          <span>{{ game.broadcast }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium text-gray-600">Game Type:</span>
          <span>{{ game.type }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  game: Object,
  close: Function,
})
</script>
