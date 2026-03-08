<script setup lang="ts">
import { useAppStore } from '@/stores/useAppStore'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'

const store = useAppStore()
</script>

<template>
  <section id="contact" class="section-padding bg-white">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row gap-10">
        <div class="lg:w-1/3">
          <h2 class="text-4xl mb-8">Get in Touch</h2>
          <p class="text-slate-600 mb-12">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you within 24 hours.
          </p>
          
          <div class="space-y-8">
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600">
                <span class="material-icons">location_on</span>
              </div>
              <div>
                <div class="font-bold text-lg mb-1">Our Office</div>
                <div class="text-slate-500">{{ store.companyInfo.address }}</div>
              </div>
            </div>
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600">
                <span class="material-icons">email</span>
              </div>
              <div>
                <div class="font-bold text-lg mb-1">Email Us</div>
                <div class="text-slate-500">{{ store.companyInfo.email }}</div>
              </div>
            </div>
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600">
                <span class="material-icons">phone</span>
              </div>
              <div>
                <div class="font-bold text-lg mb-1">Call Us</div>
                <div class="text-slate-500">{{ store.companyInfo.phone }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="lg:w-2/3">
          <form class="bg-slate-50 p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100" @submit.prevent>
            <div class="grid md:grid-cols-2 gap-8 mb-8">
              <div class="flex flex-col gap-2">
                <label for="full-name" class="text-sm font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                <InputText id="full-name" placeholder="John Doe" class="w-full" />
              </div>
              <div class="flex flex-col gap-2">
                <label for="email" class="text-sm font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                <InputText id="email" type="email" placeholder="john@example.com" class="w-full" />
              </div>
            </div>
            <div class="flex flex-col gap-2 mb-8">
              <label for="subject" class="text-sm font-bold uppercase tracking-wider text-slate-500">Subject</label>
              <InputText id="subject" placeholder="Project Inquiry" class="w-full" />
            </div>
            <div class="flex flex-col gap-2 mb-8">
              <label for="message" class="text-sm font-bold uppercase tracking-wider text-slate-500">Message</label>
              <Textarea id="message" rows="5" placeholder="Tell us about your project..." class="w-full" />
            </div>
            <Button label="Send Message" class="w-full py-5 font-bold text-lg shadow-xl" />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
