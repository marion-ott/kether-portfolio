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
  },
  experiences(parent, args, { prisma }) {
    console.log('getting experiences')
    return prisma.experiences()
  },
  experience(parent, { id }, { prisma }) {
    console.log('getting an experience')
    return prisma.experience({ id })
  }
}

export default Query
