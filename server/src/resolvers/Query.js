const Query = {
  users(parent, args, { prisma }) {
    return prisma.users()
  },
  user(parent, { id }, { prisma }) {
    return prisma.user({ id })
  },
  works(parent, args, { prisma }) {
    return prisma.works()
  },
  work(parent, { id }, { prisma }) {
    return prisma.work({ id })
  }
}

export default Query
