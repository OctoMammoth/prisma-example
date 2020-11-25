const { default: gql } = require('graphql-tag')

const User = gql`
    type User {
        id: String!
        email: String!
        name: String
        posts: [Post]
    }

    input UserDataInput {
        email: String!
        name: String
    }

    input UserWhereInput {
        id: String
        email: String
    }

    type Query {
        user(where: UserWhereInput!): User
        users: [User]
    }

    type Mutation {
        createUser(data: UserDataInput!): User
    }
`

module.exports = {
    User
}
