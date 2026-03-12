<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Divider from 'primevue/divider';

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Services',
        icon: 'pi pi-cog'
    },
    {
        label: 'Solutions',
        icon: 'pi pi-briefcase',
        items: [
            {
                label: 'Process Control',
                icon: 'pi pi-sliders-h'
            },
            {
                label: 'System Integration',
                icon: 'pi pi-share-alt'
            },
            {
                label: 'Reliability Engineering',
                icon: 'pi pi-shield'
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
]);
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="relative py-20 lg:py-32 overflow-hidden bg-slate-900">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/industrial-factory/1920/1080?grayscale"
          alt="Industrial Automation Background"
          class="w-full h-full object-cover opacity-40"
          referrerpolicy="no-referrer"
        >
        <div class="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div class="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div class="grid grid-nogutter">
          <div class="col-12 lg:col-8">
            <h1 class="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Electrical &  <span class="text-blue-400">Control Detailed Design</span>
            </h1>
            <div class="h-1 w-24 bg-blue-500 mb-8" />
            <p class="text-xl lg:text-2xl text-slate-200 mb-10 max-w-3xl font-light leading-relaxed">
              Detailed design services to produce IFC-ready packages with clear drawings, schedules, and verification deliverables.
            </p>
            <div class="flex flex-wrap gap-4">
              <Button
                label="Request a Quote"
                severity="info"
                size="large"
                rounded
                class="px-8 py-4 font-bold shadow-2xl hover:scale-105 transition-transform"
              />
              <Button
                label="View Services"
                severity="secondary"
                size="large"
                rounded
                outlined
                class="px-8 py-4 font-bold text-white border-white/40 hover:bg-white/10 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Overview Section -->
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-20">
      <div class="grid">
        <div class="col-12">
          <h2 class="text-4xl font-bold text-slate-900 mb-6">
            Overview
          </h2>
          <p class="text-xl text-slate-600 leading-relaxed max-w-4xl">
            Process control automation and integration services for industrial environments, designed for
            reliability, maintainability, and safe operation. We specialize in delivering high-performance
            solutions
            that optimize production and ensure safety.
          </p>
        </div>
      </div>

      <div class="grid mt-12">
        <!-- Scope Section -->
        <div class="col-12 lg:col-6 p-3">
          <Card class="h-full border-none shadow-sm bg-slate-50 rounded-2xl">
            <template #title>
              <h3 class="text-2xl font-bold text-slate-900 mb-4">
                Scope
              </h3>
            </template>
            <template #content>
              <ul class="list-none p-0 m-0 space-y-4">
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-blue-500 mt-1" />
                  <span class="text-slate-700 leading-relaxed">Control philosophy, functional design
                    specification (FDS) and cause & effect</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-blue-500 mt-1" />
                  <span class="text-slate-700 leading-relaxed">PLC/SCADA/DCS software design and
                    integration (vendor-agnostic)</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-blue-500 mt-1" />
                  <span class="text-slate-700 leading-relaxed">Industrial communications,
                    telemetry/RTU integration and time synchronisation strategy</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-blue-500 mt-1" />
                  <span class="text-slate-700 leading-relaxed">Loop design (PID), alarm management,
                    HMI usability and diagnostics</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-check-circle text-blue-500 mt-1" />
                  <span class="text-slate-700 leading-relaxed">FAT/SAT support, commissioning planning
                    and defect closure</span>
                </li>
              </ul>
            </template>
          </Card>
        </div>

        <!-- Typical Deliverables Section -->
        <div class="col-12 lg:col-6 p-3">
          <Card class="h-full border-none shadow-sm bg-slate-50 rounded-2xl">
            <template #title>
              <h3 class="text-2xl font-bold text-slate-900 mb-4">
                Typical deliverables
              </h3>
            </template>
            <template #content>
              <ul class="list-none p-0 m-0 space-y-4">
                <li class="flex items-start gap-3">
                  <i class="pi pi-file text-slate-500 mt-1" />
                  <span class="text-slate-700 leading-relaxed">Control philosophy / FDS and
                    commissioning plan</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-file text-slate-500 mt-1" />
                  <span class="text-slate-700 leading-relaxed">IO lists, tag lists, alarm lists and
                    operational narratives</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-file text-slate-500 mt-1" />
                  <span class="text-slate-700 leading-relaxed">PLC/SCADA/DCS code structure and
                    integration test notes</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-file text-slate-500 mt-1" />
                  <span class="text-slate-700 leading-relaxed">FAT/SAT procedures and reports</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="pi pi-file text-slate-500 mt-1" />
                  <span class="text-slate-700 leading-relaxed">As-built updates and handover
                    documentation</span>
                </li>
              </ul>
            </template>
          </Card>
        </div>
      </div>

      <!-- Request a Quote Section -->
      <div
        class="mt-20 p-8 lg:p-16 bg-slate-900 rounded-3xl shadow-2xl relative overflow-hidden border border-slate-800"
      >
        <!-- Decorative background elements -->
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        <div class="relative z-10">
          <div class="grid grid-nogutter">
            <div class="col-12 lg:col-7 mb-8 lg:mb-0">
              <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                Request a Quote
              </h2>
              <p class="text-xl text-slate-400 mb-12 max-w-xl leading-relaxed">
                Send a short scope and we'll respond with deliverables, schedule and assumptions.
              </p>

              <div class="flex flex-column gap-8">
                <!-- Email -->
                <div class="flex align-items-center gap-5 group">
                  <div
                    class="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-blue-500/50 transition-all duration-300 shadow-inner"
                  >
                    <i class="pi pi-envelope text-2xl text-blue-400" />
                  </div>
                  <div>
                    <div class="text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">
                      Email
                    </div>
                    <div class="text-xl lg:text-2xl text-white font-semibold tracking-tight">
                      info@glorysystems.com.au
                    </div>
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex align-items-center gap-5 group">
                  <div
                    class="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-emerald-500/50 transition-all duration-300 shadow-inner"
                  >
                    <i class="pi pi-phone text-2xl text-emerald-400" />
                  </div>
                  <div>
                    <div class="text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">
                      Phone
                    </div>
                    <div class="text-xl lg:text-2xl text-white font-semibold tracking-tight">
                      0433
                      883 148
                    </div>
                  </div>
                </div>

                <!-- Location -->
                <div class="flex align-items-center gap-5 group">
                  <div
                    class="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-amber-500/50 transition-all duration-300 shadow-inner"
                  >
                    <i class="pi pi-map-marker text-2xl text-amber-400" />
                  </div>
                  <div>
                    <div class="text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">
                      Location
                    </div>
                    <div class="text-xl lg:text-2xl text-white font-semibold tracking-tight">
                      Adelaide, SA
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-12 lg:col-5 flex align-items-center justify-content-center lg:justify-content-end"
            >
              <div
                class="p-10 bg-slate-800/40 backdrop-blur-md rounded-3xl border border-slate-700/50 w-full max-w-sm text-center shadow-xl"
              >
                <div
                  class="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-6 border border-blue-500/20"
                >
                  <i class="pi pi-send text-4xl text-blue-400" />
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">
                  Ready to Start?
                </h3>
                <p class="text-slate-400 mb-10 leading-relaxed">
                  Click below to provide your project
                  details via
                  our secure contact form.
                </p>
                <Button
                  label="Open Contact Form"
                  severity="info"
                  size="large"
                  rounded
                  class="w-full py-4 font-bold shadow-lg hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider class="my-20" />

      <!-- Services Grid -->
      <div class="grid">
        <div class="col-12 md:col-4 p-3">
          <Card class="h-full border-none shadow-sm hover:shadow-xl transition-all duration-500 bg-slate-50">
            <template #title>
              <div class="flex align-items-center gap-3 mb-2">
                <div
                  class="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center shadow-md"
                >
                  <i class="pi pi-sliders-h text-white text-xl" />
                </div>
                <span class="text-2xl font-bold text-slate-800">Process Control</span>
              </div>
            </template>
            <template #content>
              <p class="m-0 text-slate-600 leading-relaxed">
                Advanced control strategies designed to maximize throughput and minimize variability in
                complex industrial processes.
              </p>
            </template>
          </Card>
        </div>
        <div class="col-12 md:col-4 p-3">
          <Card class="h-full border-none shadow-sm hover:shadow-xl transition-all duration-500 bg-slate-50">
            <template #title>
              <div class="flex align-items-center gap-3 mb-2">
                <div
                  class="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center shadow-md"
                >
                  <i class="pi pi-share-alt text-white text-xl" />
                </div>
                <span class="text-2xl font-bold text-slate-800">System Integration</span>
              </div>
            </template>
            <template #content>
              <p class="m-0 text-slate-600 leading-relaxed">
                Seamless integration of hardware and software components to create unified, efficient,
                and scalable automation systems.
              </p>
            </template>
          </Card>
        </div>
        <div class="col-12 md:col-4 p-3">
          <Card class="h-full border-none shadow-sm hover:shadow-xl transition-all duration-500 bg-slate-50">
            <template #title>
              <div class="flex align-items-center gap-3 mb-2">
                <div
                  class="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center shadow-md"
                >
                  <i class="pi pi-shield text-white text-xl" />
                </div>
                <span class="text-2xl font-bold text-slate-800">Safe Operation</span>
              </div>
            </template>
            <template #content>
              <p class="m-0 text-slate-600 leading-relaxed">
                Safety-first engineering practices that ensure your operations comply with the highest
                industry standards for risk mitigation.
              </p>
            </template>
          </Card>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="bg-slate-900 py-12">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        <div class="flex flex-column md:flex-row justify-content-between align-items-center gap-6">
          <div class="flex align-items-center gap-2">
            <i class="pi pi-cog text-2xl text-blue-400" />
            <span class="text-white font-bold">&copy; 2026 Glory Systems & Automation</span>
          </div>
          <div class="flex gap-6">
            <a
              href="#"
              class="text-slate-400 no-underline hover:text-white transition-colors"
            >Services</a>
            <a
              href="#"
              class="text-slate-400 no-underline hover:text-white transition-colors"
            >Case
              Studies</a>
            <a
              href="#"
              class="text-slate-400 no-underline hover:text-white transition-colors"
            >Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
:root {
    --primary-color: #3b82f6;
}

body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.p-menubar .p-menuitem-link .p-menuitem-text {
    color: rgba(255, 255, 255, 0.8) !important;
}

.p-menubar .p-menuitem-link:hover .p-menuitem-text {
    color: white !important;
}

.p-menubar .p-menuitem-link .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.6) !important;
}

.p-card {
    border-radius: 1.25rem;
}

.p-button.p-button-secondary.p-button-outlined {
    border-color: rgba(255, 255, 255, 0.3);
}

.p-button.p-button-secondary.p-button-outlined:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: white;
}
</style>
