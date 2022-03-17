const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
  title: { type: String },
});

mongoose.model('topic', TopicSchema);
