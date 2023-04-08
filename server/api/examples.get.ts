export default defineEventHandler((event) => {
  return event.context.prisma.organisation.findMany({})
})
