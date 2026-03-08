<script setup lang="ts">
import Button from 'primevue/button'
</script>

<template>
  <section id="about" class="section-padding bg-slate-50 overflow-hidden">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <div class="lg:w-1/2 relative">
          <div class="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
          <img 
            src="https://picsum.photos/seed/tech/800/600" 
            alt="Team working" 
            class="rounded-3xl shadow-2xl relative z-10"
            referrerpolicy="no-referrer"
          />
          <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                <span class="material-icons">check_circle</span>
              </div>
              <div>
                <div class="font-bold text-lg">ISO Certified</div>
                <div class="text-sm text-slate-500">Quality Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <h2 class="text-4xl md:text-5xl mb-8">Why Choose Glory Systems?</h2>
          <p class="text-slate-600 text-lg mb-8 leading-relaxed">
            At Glory Systems, we don't just design control systems; we build robust solutions that ensure operational reliability in the most demanding environments. Our team brings decades of experience in the Mining, Power, and Water sectors.
          </p>
          <ul class="space-y-4 mb-10">
            <li v-for="item in ['Industry-Specific Expertise', 'IFC-Ready Design Packages', 'Scalable Solution Architecture', 'PLC/SCADA Lifecycle Optimisation']" :key="item" class="flex items-center gap-4">
              <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <span class="material-icons text-xs">done</span>
              </div>
              <span class="font-medium">{{ item }}</span>
            </li>
          </ul>
          <Button label="Learn More About Us" rounded class="px-8 py-4 font-bold" />
        </div>
      </div>
    </div>
  </section>
</template>
