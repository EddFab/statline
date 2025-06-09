<template>
  <div class="p-4">
    <LeagueSelector v-model="selectedLeague" />

    <div
      v-for="matchup in filteredMatchups"
      :key="matchup.time"
      class="mt-4 p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800 cursor-pointer"
      @click="showModal = true"
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
    <GameDetailModal v-if="showModal" @close="showModal = false" />
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import LeagueSelector from '@/components/LeagueSelector.vue'
import GameDetailModal from '@/components/GameDetailModal.vue'

const selectedLeague = ref('MLB')
const allMatchups = ref([])
const showModal = ref(false)

const fetchMatchups = async () => {
  console.log('📡 Attempting to fetch matchups...')
  try {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    const currentDate = `${year}${month}${day}` // Format: YYYYMMDD
    const res = await fetch(
      `https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard?dates=${currentDate}`,
    )
    const data = await res.json()

    allMatchups.value = data.events.map((event) => {
      const competition = event.competitions[0]
      const home = competition.competitors.find((c) => c.homeAway === 'home')
      const away = competition.competitors.find((c) => c.homeAway === 'away')
      const dateObj = new Date(event.date)
      const time = dateObj.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
      const localDate = dateObj.toLocaleDateString('en-CA') // Format: YYYY-MM-DD

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
        date: localDate,
      }
    })

    console.log(`✅ Matchups fetched at ${new Date().toLocaleString()}`)
    allMatchups.value.forEach((m) => {
      console.log(
        `${m.date}: ${m.away.abbreviation} @ ${m.home.abbreviation} (${m.time}) - ${m.status}`,
      )
    })
  } catch (error) {
    console.error('Error fetching matchups:', error)
  }
}

onMounted(fetchMatchups)

const today = new Date().toLocaleDateString('en-CA') // Format: YYYY-MM-DD
const filteredMatchups = computed(() =>
  allMatchups.value.filter((m) => m.league === selectedLeague.value && m.date === today),
)
</script>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0%);
}
</style>
