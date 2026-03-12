<template>
  <main class="flex-grow">
    <!-- static home content can be placed inside HomeView.vue or other route components -->
    <HeroSection />
    <StatsSection />
    <ServicesSection />
    <AboutSection />
    <CTASection />
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
import AboutSection from '@/components/home/AboutSection.vue';
import ContactSection from '@/components/home/ContactSection.vue';
import CTASection from '@/components/home/CTASection.vue';
import HeroSection from '@/components/home/HeroSection.vue';
import ServicesSection from '@/components/home/ServicesSection.vue';
import StatsSection from '@/components/home/StatsSection.vue';

// You can import and use other components here if needed
</script>

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
