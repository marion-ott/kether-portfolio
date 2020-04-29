const Experience = {
  user(parent, args, { prisma }) {
    console.log('getting user experience')
    return prisma.experience({ id: parent.id }).user()
  }
}

export default Experience
