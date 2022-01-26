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
  description: String,
  likes: {
    type: Number,
    default: 0
  },
  comments: [{
    user: String,
    comment: String
  }]
});

module.exports = mongoose.model('ArtPost', artSchema);