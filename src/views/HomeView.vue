<template>
  <div class="p-4">
    <LeagueSelector v-model="selectedLeague" />

    <div
      v-for="matchup in filteredMatchups"
      :key="matchup.time"
      class="mt-4 p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800"
    >
      <div class="grid grid-cols-3 gap-4 items-center w-full text-center">
        <div class="flex items-center justify-start space-x-2 min-w-0">
          <img :src="matchup.away.logo" alt="Away Team Logo" class="h-6 w-6" />
          <span class="text-sm font-semibold w-8 text-left">{{ matchup.away.abbreviation }}</span>
          <span v-if="matchup.away.score" class="text-sm font-bold text-blue-600 w-4 text-left">
            {{ matchup.away.score }}
          </span>
        </div>
        <div class="flex flex-col items-center justify-center min-w-0">
          <div class="text-xs text-gray-500 whitespace-nowrap">{{ matchup.time }}</div>
          <div v-if="matchup.status !== 'Scheduled'" class="text-[10px] text-gray-400">
            {{ matchup.status }}
          </div>
        </div>
        <div class="flex items-center justify-end space-x-2 min-w-0">
          <span v-if="matchup.home.score" class="text-sm font-bold text-blue-600 w-4 text-right">
            {{ matchup.home.score }}
          </span>
          <span class="text-sm font-semibold w-8 text-right">{{ matchup.home.abbreviation }}</span>
          <img :src="matchup.home.logo" alt="Home Team Logo" class="h-6 w-6" />
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
      const competition = event.competitions[0]
      const home = competition.competitors.find((c) => c.homeAway === 'home')
      const away = competition.competitors.find((c) => c.homeAway === 'away')
      const time = new Date(event.date).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })

      return {
        league: 'MLB',
        status: event.status.type.description,
        home: {
          name: home.team.displayName,
          abbreviation: home.team.abbreviation,
          logo: home.team.logo,
          score: home.score,
        },
        away: {
          name: away.team.displayName,
          abbreviation: away.team.abbreviation,
          logo: away.team.logo,
          score: away.score,
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
