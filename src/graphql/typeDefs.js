const { User } = require('./User/typeDefs')
const { Post } = require('./Post/typeDefs')
const { mergeTypeDefs } = require('@graphql-tools/merge')
const { default: gql } = require('graphql-tag')

const Default = gql `
    scalar DataTime
    scalar File
`

const typeDefs = mergeTypeDefs([User,Post,Default])

module.exports = { typeDefs }
