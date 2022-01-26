const mongoose = require('mongoose');

const artSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  art: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date()
  },
  // tags: [String],
  description: String
});

module.exports = mongoose.model('ArtPost', artSchema);