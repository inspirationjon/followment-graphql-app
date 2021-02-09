const UserModel = require('./models/users');

const resolvers = {
  Query: {
    users: () => UserModel.many(),
    followers: (_, { username }) => UserModel.onesFollowers(username),
    following: (_, { username }) => UserModel.onesFollowing(username),
  },
};

module.exports = resolvers;
