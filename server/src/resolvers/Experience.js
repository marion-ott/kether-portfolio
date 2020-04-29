const Experience = {
  user(parent, args, { prisma }) {
    return prisma.experience({ id: parent.id }).user()
  }
}

export default Experience
