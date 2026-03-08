<script setup lang="ts">
import Button from 'primevue/button'
</script>

<template>
  <section id="home" class="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
      <div class="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-purple-500/10 blur-[100px] rounded-full"></div>
    </div>

    <div class="container mx-auto px-6 text-center">
      <div class="inline-flex items-center gap-2 bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-bounce">
        <span class="material-icons text-sm">verified</span>
        Trusted by 100+ Global Companies
      </div>
      <h1 class="text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1]">
        Industrial <br/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Automation & Control</span>
      </h1>
      <p class="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
        Specialist consulting services for the Mining, Power Generation, and Water industries. We deliver robust, scalable, and efficient automation solutions.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button label="Our Services" rounded size="large" class="px-8 py-4 font-bold shadow-xl" />
        <Button label="Request a Quote" rounded size="large" variant="outlined" class="px-8 py-4 font-bold" />
      </div>
    </div>
  </section>
</template>
