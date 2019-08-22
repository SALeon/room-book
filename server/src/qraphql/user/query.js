const { GraphQLObjectType, GraphQLString } = require('graphql');
const userType = require('./type');

const fakeDatabase = {
  a: { id: 'a', name: 'alice' }
};

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (root, { id }) => fakeDatabase[id]
    }
  }
});
