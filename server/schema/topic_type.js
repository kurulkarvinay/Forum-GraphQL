const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;

const TopicType = new GraphQLObjectType({
  name: 'TopicType',
  fields:() => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString }
  })
});

module.exports = TopicType;
