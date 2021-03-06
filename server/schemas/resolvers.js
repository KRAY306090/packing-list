const { User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
                .select('-__v -password')
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
        }
    }
}

module.exports = resolvers;