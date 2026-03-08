<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Button from 'primevue/button'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="{ 
      'glass py-4': isScrolled,
      'py-6': !isScrolled
    }"
  >
    <div class="container mx-auto px-6 flex justify-between items-center">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
          <span class="material-icons">auto_awesome</span>
        </div>
        <span class="text-2xl font-display font-extrabold tracking-tight text-slate-900">GLORY<span class="text-blue-600">SYSTEMS</span></span>
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="#home" class="text-sm font-medium hover:text-blue-600 transition-colors">Home</a>
        <a href="#services" class="text-sm font-medium hover:text-blue-600 transition-colors">Services</a>
        <a href="#about" class="text-sm font-medium hover:text-blue-600 transition-colors">About</a>
        <a href="#contact" class="text-sm font-medium hover:text-blue-600 transition-colors">Contact</a>
        <Button label="Get Started" rounded class="px-6 py-2.5 font-semibold shadow-lg" />
      </nav>

      <!-- Mobile Menu Toggle -->
      <button class="md:hidden text-slate-900" @click="toggleMenu">
        <span class="material-icons">{{ isMenuOpen ? 'close' : 'menu' }}</span>
      </button>
    </div>

    <!-- Mobile Nav -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-4 shadow-xl"
      >
        <a href="#home" class="text-lg font-medium" @click="toggleMenu">Home</a>
        <a href="#services" class="text-lg font-medium" @click="toggleMenu">Services</a>
        <a href="#about" class="text-lg font-medium" @click="toggleMenu">About</a>
        <a href="#contact" class="text-lg font-medium" @click="toggleMenu">Contact</a>
        <Button label="Get Started" class="w-full py-3 font-semibold" />
      </div>
    </transition>
  </header>
</template>
