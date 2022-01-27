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
    default: Date.now,
  },
  description: String,
  likes: {
    type: Number,
    default: 0
  },
  comments: [{
    user: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  }]
});

module.exports = mongoose.model('ArtPost', artSchema);