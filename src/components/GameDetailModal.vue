<template>
  <transition name="modal-fade">
    <div class="fixed inset-0 z-50 bg-black/50" @click.self="$emit('close')">
      <transition name="modal-slide">
        <div class="absolute bottom-0 w-full h-[70vh] bg-white rounded-t-xl shadow-lg">
          <!-- Game details go here -->
          <div class="p-4 space-y-4">
            <!-- Game Info Header -->
            <div class="text-center">
              <h2 class="text-xl font-bold text-gray-800">Team A vs Team B</h2>
              <p class="text-sm text-gray-500">Today at 7:00 PM · In Progress</p>
            </div>

            <!-- Sample Prop Card -->
            <div class="bg-gray-100 rounded-lg p-4 shadow">
              <div class="flex justify-between items-center mb-2">
                <span class="text-gray-700 font-medium">Mookie Betts - Total Bases</span>
                <span class="text-green-600 font-bold text-sm">64% Over</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-gray-800">+1.5</span>
                <span class="text-gray-500 text-sm">Projection: 2.1</span>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
// No logic yet
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
