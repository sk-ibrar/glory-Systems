import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    services: [
      {
        title: 'Process Control Automation',
        description: 'Control philosophy, PLC/SCADA integration, commissioning support, and lifecycle optimisation.',
        icon: 'settings_input_component'
      },
      {
        title: 'Electrical & Control Detailed Design',
        description: 'IFC-ready design packages: drawings, schedules, IO lists, and verification packs.',
        icon: 'architecture'
      },
      {
        title: 'Solution Architecture',
        description: 'Architecture for scalable automation systems: comms, time sync, standards, and integration strategy.',
        icon: 'hub'
      },
      {
        title: 'Design & Fabrication',
        description: 'Panel design, fabrication support, QA, test packs, and handover documentation.',
        icon: 'build'
      },
      {
        title: 'Electrical & Civil Drafting',
        description: 'SLDs, wiring, terminations, loop drawings, GA/layouts, civil drawings and controlled revisions.',
        icon: 'draw'
      },
      {
        title: 'Parts & Sourcing',
        description: 'Supply support: components, spares, alternates, lead-times and procurement documentation.',
        icon: 'shopping_cart'
      }
    ],
    stats: [
      { label: 'Projects Completed', value: '250+' },
      { label: 'Happy Clients', value: '120+' },
      { label: 'Years Experience', value: '10+' },
      { label: 'Expert Team', value: '25+' }
    ],
    companyInfo: {
      name: 'GLORY SYSTEMS',
      email: 'info@glorysystems.com.au',
      phone: '+61 2 1234 5678',
      address: '123 Tech Avenue, Suite 500, Sydney, NSW 2000, Australia'
    }
  })
})
