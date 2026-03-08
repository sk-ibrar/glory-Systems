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
    
    <main class="flex-grow">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <CTASection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

.glass {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.section-padding {
  padding: 5rem 1.5rem;
}

@media (min-width: 768px) {
  .section-padding {
    padding: 5rem 3rem;
  }
}

@media (min-width: 1024px) {
  .section-padding {
    padding: 5rem 6rem;
  }
}
</style>
