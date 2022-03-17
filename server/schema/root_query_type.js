const mongoose = require('mongoose');
const graphql = require('graphql');
const topic = mongoose.model('topic')
const TopicType = require('./topic_type')
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    topic : {
      type: TopicType,
      args: { id: { type: GraphQLString } },
      resolve() {
        return topic.find({});
      }
    }
  }
});

module.exports = RootQuery;