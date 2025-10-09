// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/image", "@nuxtjs/tailwindcss"],
  fonts: {
    families: [
      // only resolve this font with the `google` provider
      {
        name: "Poppins",
        provider: "google",
        weights: [300, 400, 500, 600, 700],
      },
    ],
  },
  tailwindcss: {},
  css: ["~/assets/css/main.css"],
});
