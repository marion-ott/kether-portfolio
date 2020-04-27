const Query = {
  works(parent, args, { prisma }) {
    return prisma.works()
  },
  work(parent, { id }, { prisma }) {
    return prisma.work({ id })
  }
}

export default Query
