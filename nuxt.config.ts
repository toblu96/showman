// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth"],
  runtimeConfig: {
    // Private config that is only available on the server
    KEYCLOAK_ID: "showman-auth",
    KEYCLOAK_SECRET: "ZQLAXpaMD9YF7m6EnUN4fRYrlKjrssWl",
    // Config within public will be also exposed to the client
    public: {
      KEYCLOAK_ISSUER: "http://localhost:8180/realms/showman",
    },
  },
  auth: {
    enableGlobalAppMiddleware: true,
  },
});
