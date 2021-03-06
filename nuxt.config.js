export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Weijie Fu",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Exo+2:wght@100;400;600;900&display=swap"
      }
    ],
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/blotter.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/materials/channelSplitMaterial.min.js"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      "vue-scrollto/nuxt",
      { duration: 2000, easing: "ease-in-out", offset: -60 }
    ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  server: {
    port: 8000, // default: 3000
    host: "0.0.0.0" // default: localhost
  } // other configs
};
