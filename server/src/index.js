import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'

const resolvers = {
  Query,
  Mutation
}

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: (req) => ({
    ...req,
    prisma
  })
})

server.start(({ port }) => console.log(`Server started on port ${port}`))
