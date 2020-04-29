const User = {
  experiences(parent, args, { prisma }) {
    return prisma.user({ id: parent.id }).experiences()
  }
}

export default User
