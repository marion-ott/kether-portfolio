const Mutation = {
  async createUser(parent, { input }, { prisma }) {
    const user = await prisma.createUser(input)
    return user
  },
  async updateUser(parent, { id, input }, { prisma }) {
    const user = await prisma.updateUser({ input, where: { id } })
    return user
  },
  async deleteUser(parent, { id }, { prisma }) {
    const user = await prisma.deleteUser({ id })
    return args
  },
  async createWork(parent, { input }, { prisma }) {
    const work = await prisma.createWork(input)
    return work
  },
  async updateWork(parent, { id, input }, { prisma }) {
    const work = await prisma.updateWork({ input, where: { id } })
    return work
  },
  async deleteWork(parent, { id }, { prisma }) {
    const work = await prisma.deleteWork({ id })
    return work
  }
}

export default Mutation
