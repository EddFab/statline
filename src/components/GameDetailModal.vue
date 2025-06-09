<template>
  <div class="fixed inset-0 z-50 bg-black/50" @click.self="$emit('close')">
    <div class="absolute bottom-0 w-full h-[70vh] bg-white rounded-t-xl shadow-lg">
      <!-- Game details go here -->
      <div class="p-4 text-center text-gray-700 font-semibold">Game Detail Modal</div>
    </div>
  </div>
</template>

<script setup>
// No logic yet
</script>
