import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    services: [
      {
        title: "Process Control Automation",
        description:
          "Control philosophy, PLC/SCADA integration, commissioning support, and lifecycle optimisation.",
        icon: "settings_input_component",
        route: "/pca", // matches router/index.ts
      },
      {
        title: "Electrical & Control Detailed Design",
        description:
          "IFC-ready design packages: drawings, schedules, IO lists, and verification packs.",
        icon: "architecture",
        route: "/electrical-control-design", // route can be added later when a dedicated view exists
        // route can be added later when a dedicated view exists
      },
      {
        title: "Solution Architecture",
        description:
          "Architecture for scalable automation systems: comms, time sync, standards, and integration strategy.",
        icon: "hub",
      },
      {
        title: "Design & Fabrication",
        description:
          "Panel design, fabrication support, QA, test packs, and handover documentation.",
        icon: "build",
      },
      {
        title: "Electrical & Civil Drafting",
        description:
          "SLDs, wiring, terminations, loop drawings, GA/layouts, civil drawings and controlled revisions.",
        icon: "draw",
      },
      {
        title: "Parts & Sourcing",
        description:
          "Supply support: components, spares, alternates, lead-times and procurement documentation.",
        icon: "shopping_cart",
      },
      {
        title: "Custom Web Solutions",
        description:
          "High-performance, SEO-friendly websites built with modern frameworks to turn your visitors into loyal customers.",
        icon: "desktop_windows",
      },
      {
        title: "Mobile App Development",
        description:
          "Powerful iOS and Android applications designed with a focus on user retention and seamless performance.",
        icon: "app_shortcut",
      },
      {
        title: "Enterprise Software",
        description:
          "Scalable internal tools and CRM systems built to automate your workflows and increase team productivity.",
        icon: "settings_suggest",
      },
      {
        title: "E-Commerce Platforms",
        description:
          "Secure, conversion-optimized online stores with integrated payment gateways and inventory management.",
        icon: "storefront",
      },
      {
        title: "API & System Integration",
        description:
          "Connecting your existing tools and third-party services into one cohesive, automated ecosystem.",
        icon: "hub",
      },
      {
        title: "UI/UX Modernization",
        description:
          "Revamping outdated interfaces with modern design trends to improve user engagement and brand trust.",
        icon: "auto_awesome",
      },
    ],
    stats: [
      { label: "Projects Completed", value: "250+" },
      { label: "Happy Clients", value: "120+" },
      { label: "Years Experience", value: "10+" },
      { label: "Expert Team", value: "25+" },
    ],
    companyInfo: {
      name: "GLORY SYSTEMS",
      email: "info@glorysystems.com.au",
      phone: "+61 2 1234 5678",
      address: "123 Tech Avenue, Suite 500, Sydney, NSW 2000, Australia",
    },
  }),
});
