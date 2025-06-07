<template>
  <div class="flex space-x-3 overflow-x-auto px-4 py-2">
    <button
      v-for="league in leagues"
      :key="league.name"
      @click="selectLeague(league.name)"
      :class="[
        'flex items-center px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap',
        props.modelValue === league.name ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800',
      ]"
    >
      <span v-if="league.icon" class="mr-2 text-lg">{{ league.icon }}</span>
      {{ league.name }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const leagues = [
  { name: 'MLB', icon: '⚾️' },
  { name: 'NBA', icon: '🏀' },
  { name: 'NFL', icon: '🏈' },
  { name: 'Soccer', icon: '⚽' },
  { name: 'WNBA', icon: '🏀' },
  { name: 'NCAAF', icon: '🏈' },
  { name: 'NCAAM', icon: '🏀' },
  { name: 'NCAAW', icon: '🏀' },
]

const props = defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const selectLeague = (league) => {
  emit('update:modelValue', league)
}
</script>
