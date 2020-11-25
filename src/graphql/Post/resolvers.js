const { PrismaSelect } = require('@paljs/plugins')

const Post = {
    Query: {
        posts: async (_parent, args, { prisma }, info) => {
            const select = new PrismaSelect(info).value
            return prisma.post.findOne({ ...select })
        }
    },
    Mutation: {
        createPost: async (_parent, args, { prisma }, info) => {
            const { authorId } = args.data
            delete args.data.authorId
            const select = new PrismaSelect(info).value
            return prisma.post.create({
                data: { ...args.data, author: { connect: { id: authorId } } },
                ...select
            })
        }
    }
}

module.exports = {
    Post
}