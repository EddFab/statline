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
