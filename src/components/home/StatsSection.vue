<script setup lang="ts">
import { useAppStore } from '@/stores/useAppStore'

const store = useAppStore()
</script>

<template>
  <section class="bg-slate-900 py-16">
    <div class="container mx-auto px-8 flex justify-center">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="stat in store.stats"
          :key="stat.label"
          class="text-center"
        >
          <div class="text-3xl md:text-4xl font-display font-bold text-white mb-2">
            {{ stat.value }}
          </div>
          <div class="text-slate-400 text-sm uppercase tracking-widest font-semibold">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
