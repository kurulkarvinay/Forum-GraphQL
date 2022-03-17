const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Topic = mongoose.model('topic');
const TopicType = require('./topic_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTopic: {
      type: TopicType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return (new Topic( { title } )).save()
      }
    }
  }
});

module.exports = mutation;