const Mutation = {
  async createUser(parent, { input }, { prisma }) {
    const user = await prisma.createUser(input)
    return user
  },
  async updateUser(parent, { id, input }, { prisma }) {
    const user = await prisma.updateUser({ data: input, where: { id } })
    return user
  },
  async deleteUser(parent, { id }, { prisma }) {
    const user = await prisma.deleteUser({ id })
    return user
  },
  async createWork(parent, { input }, { prisma }) {
    const work = await prisma.createWork(input)
    return work
  },
  async updateWork(parent, { id, input }, { prisma }) {
    const work = await prisma.updateWork({ data: input, where: { id } })
    return work
  },
  async deleteWork(parent, { id }, { prisma }) {
    const work = await prisma.deleteWork({ id })
    return work
  },
  async createExperience(parent, { input }, { prisma }) {
    const body = {
      ...input,
      user: {
        connect: { id: input.user }
      }
    }
    const experience = await prisma.createExperience(body)
    return experience
  },
  async updateExperience(parent, { id, input }, { prisma }) {
    const experience = await prisma.updateExperience({
      data: input,
      where: { id }
    })
    return experience
  },
  async deleteExperience(parent, { id }, { prisma }) {
    const experience = await prisma.deleteExperience({ id })
    return experience
  }
}

export default Mutation
