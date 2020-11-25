const { PrismaClient } = require('@prisma/client')
const { GraphQLServer } = require('graphql-yoga')
const { typeDefs } = require('./graphql/typeDefs')
const { resolvers } = require('./graphql/resolvers')
require('dotenv').config()

process.env.TZ = 'UTC'

const prisma = new PrismaClient()

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    // middlewares: [PrismaSelect],
    context: (req) => {
        const { authorization } = req.request.headers
        return {
            prisma
        }
    }
})
const PORT = process.env.PORT || process.env.SERVER_PORT || 4000

server.start({ port: PORT, playground: '/playground', endpoint: '/graphql' }, () => {
    console.log(`Server is running on localhost:${PORT}`)
})
