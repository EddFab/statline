<template>
  <transition name="modal-fade">
    <div class="fixed inset-0 z-50 bg-black/50" @click.self="$emit('close')">
      <transition name="modal-slide">
        <div class="absolute bottom-0 w-full h-[70vh] bg-white rounded-t-xl shadow-lg overflow-y-auto">
          <!-- Game details go here -->
          <div class="p-4 space-y-4">
            <!-- Game Info Header -->
            <div class="text-center">
              <div class="grid grid-cols-3 items-center gap-x-2 text-center">
                <div class="flex flex-col items-center">
                  <img
                    :src="matchup.away?.logo"
                    alt="Away Team Logo"
                    class="h-10 w-10 object-contain"
                  />
                  <span class="text-xs text-gray-700 text-center break-words">
                    {{ matchup.away?.name }}
                  </span>
                </div>

                <div class="text-sm text-gray-500 font-semibold">vs</div>

                <div class="flex flex-col items-center">
                  <img
                    :src="matchup.home?.logo"
                    alt="Home Team Logo"
                    class="h-10 w-10 object-contain"
                  />
                  <span class="text-xs text-gray-700 text-center break-words">
                    {{ matchup.home?.name }}
                  </span>
                </div>
              </div>
              <p class="text-sm text-gray-500 mt-2 text-center">
                {{ matchup.start_time }} · {{ matchup.status }}
              </p>
            </div>

            <!-- Sample Prop Cards -->
            <div class="bg-gray-100 rounded-lg p-4 shadow">
              <div class="flex justify-between items-center">
                <span class="text-gray-800 font-semibold">Moneyline</span>
              </div>
            </div>
            <div class="mt-2 grid grid-cols-3 items-center gap-x-2 text-sm text-gray-600">
              <div class="flex justify-center items-center">
                <img :src="matchup.away?.logo" alt="Away Logo" class="h-5 w-5 object-contain" />
              </div>
              <div class="text-center text-xs font-medium">Win Probability</div>
              <div class="flex justify-center items-center">
                <img :src="matchup.home?.logo" alt="Home Logo" class="h-5 w-5 object-contain" />
              </div>
            </div>
            <div class="mt-1 grid grid-cols-3 items-center gap-x-2 text-xs text-gray-600">
              <div class="text-center">--%</div>
              <div></div>
              <div class="text-center">--%</div>
            </div>

            <div class="bg-gray-100 rounded-lg p-4 shadow">
              <div class="flex justify-between items-center">
                <span class="text-gray-800 font-semibold">Total Runs</span>
              </div>
            </div>
            <div class="mt-2 grid grid-cols-3 items-center gap-x-2 text-sm text-gray-600">
              <div class="flex justify-center items-center">
                <img :src="matchup.away?.logo" alt="Away Logo" class="h-5 w-5 object-contain" />
              </div>
              <div class="text-center text-xs font-medium">Projected Runs</div>
              <div class="flex justify-center items-center">
                <img :src="matchup.home?.logo" alt="Home Logo" class="h-5 w-5 object-contain" />
              </div>
            </div>
            <div class="mt-1 grid grid-cols-3 items-center gap-x-2 text-xs text-gray-600">
              <div class="text-center">--</div>
              <div class="text-center">Total: --</div>
              <div class="text-center">--</div>
            </div>

            <div class="bg-gray-100 rounded-lg p-4 shadow">
              <div class="flex justify-between items-center">
                <span class="text-gray-800 font-semibold">Spread</span>
              </div>
            </div>

            <div class="bg-gray-100 rounded-lg p-4 shadow">
              <div class="flex justify-between items-center">
                <span class="text-gray-800 font-semibold">Hits</span>
              </div>
            </div>
            <div class="mt-2 grid grid-cols-3 text-xs text-gray-700 text-center gap-2">
              <div class="flex justify-center items-center">
                <img :src="matchup.away?.logo" alt="Away Logo" class="h-5 w-5 object-contain mb-1" />
              </div>
              <div></div>
              <div class="flex justify-center items-center">
                <img :src="matchup.home?.logo" alt="Home Logo" class="h-5 w-5 object-contain mb-1" />
              </div>
              <!-- Away Team -->
              <div>
                <div class="font-medium mb-1">Over 0.5</div>
                <div>1. -- (--)%</div>
                <div>2. -- (--)%</div>
                <div>3. -- (--)%</div>
              </div>

              <!-- Top Overall -->
              <div>
                <div class="font-medium mb-1">Top Overall</div>
                <div>1. -- (--)%</div>
                <div>2. -- (--)%</div>
                <div>3. -- (--)%</div>
              </div>

              <!-- Home Team -->
              <div>
                <div class="font-medium mb-1">Over 0.5</div>
                <div>1. -- (--)%</div>
                <div>2. -- (--)%</div>
                <div>3. -- (--)%</div>
              </div>
            </div>

            <div class="bg-gray-100 rounded-lg p-4 shadow">
              <div class="flex justify-between items-center">
                <span class="text-gray-800 font-semibold">RBI</span>
              </div>
            </div>
            <div class="mt-2 grid grid-cols-3 text-xs text-gray-700 text-center gap-2">
              <div class="flex justify-center items-center">
                <img :src="matchup.away?.logo" alt="Away Logo" class="h-5 w-5 object-contain mb-1" />
              </div>
              <div></div>
              <div class="flex justify-center items-center">
                <img :src="matchup.home?.logo" alt="Home Logo" class="h-5 w-5 object-contain mb-1" />
              </div>

              <!-- Away Team -->
              <div>
                <div class="font-medium mb-1">Under 0.5</div>
                <div>1. -- (--)%</div>
                <div>2. -- (--)%</div>
                <div>3. -- (--)%</div>
              </div>

              <!-- Top Overall -->
              <div>
                <div class="font-medium mb-1">Top Overall</div>
                <div>1. -- (--)%</div>
                <div>2. -- (--)%</div>
                <div>3. -- (--)%</div>
              </div>

              <!-- Home Team -->
              <div>
                <div class="font-medium mb-1">Under 0.5</div>
                <div>1. -- (--)%</div>
                <div>2. -- (--)%</div>
                <div>3. -- (--)%</div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>


<script setup>
import { onMounted, onUnmounted } from 'vue'
defineProps({
  matchup: Object,
})

onMounted(() => {
  document.body.style.overflow = 'hidden'
})
onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: background-color 30s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  background-color: transparent;
}

.modal-slide-enter-active,
.modal-slide-leave-active {
  transition: transform 30s ease;
}
.modal-slide-enter-from,
.modal-slide-leave-to {
  transform: translateY(100%);
}
</style>
