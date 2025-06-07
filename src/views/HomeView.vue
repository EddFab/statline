<template>
  <div class="p-4">
    <LeagueSelector v-model="selectedLeague" />

    <div
      v-for="matchup in filteredMatchups"
      :key="matchup.time"
      class="mt-4 p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <img :src="matchup.away.logo" alt="Away Team Logo" class="h-6 w-6" />
          <span class="text-sm font-semibold">{{ matchup.away.name }}</span>
        </div>
        <span class="text-xs text-gray-500">{{ matchup.time }}</span>
        <div class="flex items-center space-x-2">
          <img :src="matchup.home.logo" alt="Home Team Logo" class="h-6 w-6" />
          <span class="text-sm font-semibold">{{ matchup.home.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import LeagueSelector from '@/components/LeagueSelector.vue'

const selectedLeague = ref('MLB')
const allMatchups = ref([])

const fetchMatchups = async () => {
  try {
    const res = await fetch('https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard')
    const data = await res.json()

    allMatchups.value = data.events.map((event) => {
      const home = event.competitions[0].competitors.find((c) => c.homeAway === 'home')
      const away = event.competitions[0].competitors.find((c) => c.homeAway === 'away')
      const time = new Date(event.date).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })

      return {
        league: 'MLB',
        home: {
          name: home.team.displayName,
          logo: home.team.logo,
        },
        away: {
          name: away.team.displayName,
          logo: away.team.logo,
        },
        time,
      }
    })
  } catch (error) {
    console.error('Error fetching matchups:', error)
  }
}

onMounted(fetchMatchups)

const filteredMatchups = computed(() =>
  allMatchups.value.filter((m) => m.league === selectedLeague.value),
)
</script>
