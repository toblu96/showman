export default defineEventHandler((event) => {
  return event.context.prisma.project.findMany({})
})
