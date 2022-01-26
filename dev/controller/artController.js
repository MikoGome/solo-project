const ArtPost = require('../model/art.js');

const artController = {}

artController.getArt = (req, res, next) => {
  ArtPost.find({}).sort({date: -1}).exec()
    .then(data => {
      res.locals = data;
      next();
    })
    .catch(err => {
      console.log('error occured during artController.getArt', err);
    });
}

artController.postArt = (req, res, next) => {
  ArtPost.create(req.body)
    .then(data => {
      next();
    })
    .catch(err => {
      console.log('error occured druing artController.postArt', err);
    });
}

module.exports = artController;