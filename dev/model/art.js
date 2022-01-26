const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://Miko:2182Haruhi@mikocluster.bmr4k.mongodb.net/ArtistStory?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'ArtistStory'
})
  .then(() => console.log('database connected'))
  .catch(() => console.log('error occured while connecting to database'));

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
  tags: [String],
  description: String
});

modules.exports = mongoose.model('ArtPost', artSchema);