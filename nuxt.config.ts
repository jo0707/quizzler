// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts", "@pinia/nuxt", "@nuxtjs/supabase", "@nuxtseo/module"],
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in", appear: true },
  },
  ui: {
    safelistColors: ["green"],
  },
  googleFonts: {
    families: {
      "DM Sans": true,
    },
  },
  supabase: {
    redirect: false,
  },
  site: {
    url: "https://quizzler.jooo.my.id/",
    name: "Quizzler",
    description:
      "Quizzler is a simple and fun quiz game that challenges you with different categories and lets you compete for the leaderboard for all the correct answers!",
    defaultLocale: "en",
    identity: {
      type: "Person",
    },
    twitter: "@jooey0707",
  },
})
