const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const router = require('./dev/routes/routes.js');

const MONGO_URI = 'mongodb+srv://Miko:2182Haruhi@mikocluster.bmr4k.mongodb.net/ArtistStory?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'ArtistStory'
})
  .then(() => console.log('database connected'))
  .catch(() => console.log('error occured while connecting to database'));


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', router);

app.get('/', (req, res) => {
  // res.sendFile(path.resolve('dist', 'index.html'));
  res.sendFile(path.resolve('dev', 'views', 'temp.html'));
});

app.listen(3000, () => {
  console.log('app is listening to port 3000');
})