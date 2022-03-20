const mongoose = require('mongoose');
const graphql = require('graphql');
const Topic = mongoose.model('topic')
const TopicType = require('./topic_type')
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} = graphql;


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    //get the list of all topics
    topics: {
      type: new GraphQLList(TopicType),
      resolve() {
        return Topic.find({});
      }
    },
    //get the topic by id
    topic: {
      type: TopicType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Topic.findById(id);
      }
    }
  })
});

module.exports = RootQuery;