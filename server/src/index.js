import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import User from './resolvers/User'
import Experience from './resolvers/Experience'

const resolvers = {
  Query,
  Mutation,
  User,
  Experience
}

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: (req) => ({
    ...req,
    prisma
  })
})

server.start({ port: process.env.PORT || 4000 }, () =>
  console.log(`Server started`)
)
