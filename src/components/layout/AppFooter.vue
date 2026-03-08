<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
</script>

<template>
  <footer class="bg-slate-900 pt-20 pb-10 text-white">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div class="col-span-1 lg:col-span-1">
          <div class="flex items-center gap-2 mb-8">
            <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
              <span class="material-icons text-sm">auto_awesome</span>
            </div>
            <span class="text-xl font-display font-extrabold tracking-tight">GLORY<span class="text-blue-600">SYSTEMS</span></span>
          </div>
          <p class="text-slate-400 leading-relaxed mb-8">
            Specialist industrial automation and control consulting for the Mining, Power Generation, and Water & Utilities sectors.
          </p>
          <div class="flex gap-4">
            <a v-for="icon in ['facebook', 'alternate_email', 'share']" :key="icon" href="#" class="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <span class="material-icons text-sm">{{ icon }}</span>
            </a>
          </div>
        </div>
        
        <div>
          <h4 class="text-lg font-bold mb-8">Quick Links</h4>
          <ul class="space-y-4 text-slate-400">
            <li><a href="#home" class="hover:text-white transition-colors">Home</a></li>
            <li><a href="#services" class="hover:text-white transition-colors">Services</a></li>
            <li><a href="#about" class="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#contact" class="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-bold mb-8">Services</h4>
          <ul class="space-y-4 text-slate-400">
            <li><a href="#" class="hover:text-white transition-colors">Process Control</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Electrical Design</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Solution Architecture</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Drafting Services</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-bold mb-8">Newsletter</h4>
          <p class="text-slate-400 mb-6">Subscribe to get the latest news and updates.</p>
          <div class="flex flex-col gap-3">
            <InputText placeholder="Your email" class="bg-white/5 border-white/10 text-white" />
            <Button label="Subscribe" class="w-full" />
          </div>
        </div>
      </div>
      
      <div class="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
        <div>&copy; 2024 Glory Systems Australia. All rights reserved.</div>
        <div class="flex gap-8">
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <a href="#" class="hover:text-white">Terms of Service</a>
          <a href="#" class="hover:text-white">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>
