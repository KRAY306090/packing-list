const { gql } = require('apollo-server-express');

const typeDefs = gql`
input UserInput {
    username: String
    email: String
    password: String
}

type User {
    _id: ID
    username: String
    email: String
    password: String
}
`

module.exports = typeDefs;