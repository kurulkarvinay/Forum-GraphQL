const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;

const TopicType = new GraphQLObjectType({
  name: 'Topic',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString }
  }
});

module.exports = TopicType;
