const { default: gql } = require('graphql-tag')

const Post = gql`
    type Post {
        id: String!
        title: String!
        content: String
        published: Boolean!
        author: User
        authorId: String
    }

    input PostDataInput {
        title: String!
        content: String
        published: Boolean!
        authorId: String!
    }

    input PostWhereInput {
        id: String
    }

    type Query {
        posts: [Post]
    }

    type Mutation {
        createPost(data:PostDataInput): Post
    }
`

module.exports = {
    Post
}
