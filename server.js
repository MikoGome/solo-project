const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const artController = require('./dev/controller/artController.js');

const MONGO_URI = 'mongodb+srv://Miko:2182Haruhi@mikocluster.bmr4k.mongodb.net/ArtistStory?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'ArtistStory'
})
  .then(() => console.log('database connected'))
  .catch(() => console.log('error occured while connecting to database'));

app.get('/', (req, res) => {
  // res.sendFile(path.resolve('dist', 'index.html'));
  res.sendFile(path.resolve('dev', 'views', 'temp.html'));
});

app.post('/', (req, res) => {
  // res.sendFile(path.resolve('dist', 'index.html'));
  res.sendFile(path.resolve('dev', 'views', 'temp.html'));
});

app.get('/api', artController.getArt, (req, res) => {
  res.status(200).json(res.locals);
});

app.listen(3000, () => {
  console.log('app is listening to port 3000');
})