<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HeroSection from './components/home/HeroSection.vue'
import StatsSection from './components/home/StatsSection.vue'
import ServicesSection from './components/home/ServicesSection.vue'
import AboutSection from './components/home/AboutSection.vue'
import CTASection from './components/home/CTASection.vue'
import ContactSection from './components/home/ContactSection.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    
    <router-view />
   

    <AppFooter />
  </div>
</template>


