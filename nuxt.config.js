export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-firebase',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyC7QBOzZakKN_KaJ5P3Bb3pCA6KsWobE_w',
          authDomain: 'sams-abdea.firebaseapp.com',
          projectId: 'sams-abdea',
          storageBucket: 'sams-abdea.appspot.com',
          messagingSenderId: '3508375956',
          appId: '1:3508375956:web:f184f2e92d46770fe93f81',
          // measurementId: '<measurementId>'
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          firestore: true,
          functions: true,
          storage: true,
          database: true,
        },
        env: {
          FIRE_ENV: process.env.FIRE_ENV
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
