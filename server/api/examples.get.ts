export default defineEventHandler((event) => {
  return event.context.prisma.example.findMany({})
})
