import KeycloakProvider from 'next-auth/providers/keycloak'
import { NuxtAuthHandler } from '#auth'

const config = useRuntimeConfig()

export default NuxtAuthHandler({
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    KeycloakProvider.default({
      clientId: config.KEYCLOAK_ID,
      clientSecret: config.KEYCLOAK_SECRET,
      issuer: config.public.KEYCLOAK_ISSUER
    })
  ]
})
