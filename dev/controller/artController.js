const ArtPost = require('../model/art.js');

const artController = {}

artController.getArt = (req, res, next) => {
  ArtPost.find({}).sort({$natural: -1}).exec()
    .then(data => {
      res.locals = data;
      next();
    })
    .catch(err => {
      console.log('error occured during artController.getArt');
    });
}

artController.postArt = (req, res, next) => {
  ArtPost.create(req.body)
    .then(() => {
      next();
    })
    .catch(err => {
      console.log('error occured during artController.postArt');
      next();
    });
}

artController.deleteArt = (req, res, next) => {
  ArtPost.deleteOne({_id: req.params.id}).exec()
    .then(next)
    .catch(() => console.log('error occured during'));
}

artController.patchArt = (req, res, next) => {
  ArtPost.findByIdAndUpdate(req.params.id, {comments: req.body}).exec()
    .then(result => {
      res.locals = result.comments;
      next();
    })
    .catch((err) => console.log('error occured during artController.patchArt', err));
}

module.exports = artController;