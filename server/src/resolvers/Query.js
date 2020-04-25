const Query = {
  works(parent, args, context) {
    return context.prisma.works()
  }
}

export default Query
