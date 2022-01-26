const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  // res.sendFile(path.resolve('dist', 'index.html'));
  res.sendFile(path.resolve('dev', 'views', 'temp.html'));
});

app.post('/', (req, res) => {
  // res.sendFile(path.resolve('dist', 'index.html'));
  res.sendFile(path.resolve('dev', 'views', 'temp.html'));
});

app.listen(3000, () => {
  console.log('app is listening to port 3000');
})