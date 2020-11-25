const { PrismaSelect } = require('@paljs/plugins')

const User = {
    Query: {
        user: async (_parent, args, { prisma }, info) => {
            const select = new PrismaSelect(info).value
            return prisma.user.findOne({ ...args, ...select })
        },
        users: async (_parent, args, { prisma }, info) => {
            const select = new PrismaSelect(info).value
            return prisma.user.findMany({ ...select })
        }
    },
    Mutation: {
        createUser: async (_parent, args, { prisma }, info) => {
            const select = new PrismaSelect(info).value
            return prisma.user.create({ ...args, ...select })
        }
    }
}

module.exports = {
    User
}
