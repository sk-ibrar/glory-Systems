<script setup lang="ts">
import { useAppStore } from '@/stores/useAppStore'
import Card from 'primevue/card'
import { animate } from "motion"
import { useRouter } from 'vue-router'

const store = useAppStore()
const router = useRouter()

function go(route: string) {
  if (route) {
    router.push(route)
  }
}

const handleMouseMove = (e: MouseEvent) => {
  const card = e.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  const rotateX = (y - centerY) / 10
  const rotateY = (centerX - x) / 10
  
  // Calculate shadow offset
  const shadowX = (x - centerX) / 5
  const shadowY = (y - centerY) / 5
  
  animate(card, {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    boxShadow: `${-shadowX}px ${-shadowY}px 30px rgba(0, 0, 0, 0.1)`
  }, { duration: 0.1 })
}

const handleMouseLeave = (e: MouseEvent) => {
  const card = e.currentTarget as HTMLElement
  animate(card, {
    transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    boxShadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
  }, { duration: 0.5, ease: "easeOut" })
}
</script>

<template>
  <section
    id="services"
    class="section-padding bg-white overflow-hidden"
  >
    <div class="container ">
      <div class="text-center max-w-3xl mx-auto mb-16 mt-6">
        <h2 class="text-4xl md:text-5xl mb-6">
          Our Services
        </h2>
        <p class="text-slate-600 text-lg">
          Comprehensive industrial automation and control consulting tailored to complex operational environments.
        </p>
      </div>

      <div class="grid">
        <div 
          v-for="service in store.services" 
          :key="service.title"
          class="perspective-container col-4"
          @click="service.route && go(service.route)"
        >
          <Card 
            class="service-card group border border-slate-100 shadow-sm bg-white hover:shadow-xl transition-all duration-500 rounded-xl overflow-hidden cursor-pointer h-full"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <template #content>
              <div class="p-10 h-full flex flex-col">
                <h3 class="text-xl mb-6 font-bold text-slate-900 leading-tight">
                  {{ service.title }}
                </h3>
                <p class="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {{ service.description }}
                </p>
                <div class="flex items-center gap-1 text-slate-900 font-medium group-hover:text-blue-600 transition-colors">
                  <span>Learn more</span>
                  <span class="material-icons text-lg">arrow_right_alt</span>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.perspective-container {
  perspective: 1000px;
}

.service-card {
  transform-style: preserve-3d;
  will-change: transform;
}

:deep(.p-card-body) {
  padding: 0;
}

:deep(.p-card-content) {
  padding: 0;
}
</style>
