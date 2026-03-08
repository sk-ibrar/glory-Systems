<script setup lang="ts">
import Button from 'primevue/button'
</script>

<template>
  <section class="section-padding">
    <div class="container mx-auto">
      <div class="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <h2 class="text-4xl md:text-6xl mb-8 relative z-10">Ready to Transform Your Business?</h2>
        <p class="text-xl text-white/80 max-w-2xl mx-auto mb-12 relative z-10">
          Join hundreds of successful companies that have scaled their operations with our premium industrial solutions.
        </p>
        <Button label="Get a Free Consultation" rounded size="large" class="bg-white text-blue-600 px-10 py-5 font-bold shadow-2xl hover:scale-105 transition-transform" />
      </div>
    </div>
  </section>
</template>
