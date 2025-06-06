<template>
  <div class="p-4">
    <LeagueSelector class="mb-4" v-model:selected="selectedLeague" />

    <div class="text-center">
      <h1 class="text-2xl font-bold">Welcome to StatLine</h1>
      <p class="text-gray-500 mt-2">This is your home page.</p>
      <div class="mt-6">
        <h2 class="text-lg font-semibold mb-2">Today's Matchups</h2>
        <div
          v-for="matchup in filteredMatchups"
          :key="matchup.home + '-' + matchup.away"
          class="p-4 mb-3 bg-gray-100 rounded-lg shadow text-center"
        >
          <div class="text-lg font-bold">{{ matchup.away }} @ {{ matchup.home }}</div>
          <div class="text-sm text-gray-600">Start Time: {{ matchup.time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import LeagueSelector from '@/components/LeagueSelector.vue'

const selectedLeague = ref('MLB')

const allMatchups = [
  {
    league: 'MLB',
    home: 'Yankees',
    away: 'Red Sox',
    time: '7:05 PM',
  },
  {
    league: 'MLB',
    home: 'Dodgers',
    away: 'Giants',
    time: '9:40 PM',
  },
  {
    league: 'NBA',
    home: 'Lakers',
    away: 'Warriors',
    time: '8:00 PM',
  },
]

const filteredMatchups = computed(() =>
  allMatchups.filter((m) => m.league === selectedLeague.value),
)
</script>

<style scoped></style>
