const Mutation = {
  async createUser(parent, { input }, { prisma }) {
    const user = await prisma.createUser(input)
    return user
  },
  async updateUser(parent, { id, input }, context) {
    const user = await prisma.updateUser({ input, where: { id } })
    return user
  },
  async deleteUser(parent, { id }, context) {
    const user = await prisma.deleteUser({ where: { id } })
    return args
  },
  createWork(parent, args, context) {
    return args.name
  }
}

export default Mutation
