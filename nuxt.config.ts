// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  // @ts-ignore
  extends: [
    'github:Raphsant/nuxt-template',        // GitHub Remote Source

  ]
})
