const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    users: [User]
    followers(username: String!): [User]
    following(username: String!): [User]
  }

  type User {
    username: String!
    followers: [String]
    following: [String]
  }
`;

module.exports = typeDefs;
