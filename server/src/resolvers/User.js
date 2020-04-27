const User = {
  works({ id }, args, { prisma }) {
    return prisma.user({ id }).works()
  }
}

export default User
