const express = require('express');
const router = express.Router();
const artController = require('../controller/artController.js');

router.get('/', artController.getArt, (req, res) => {
  res.status(200).json(res.locals);
});

router.post('/', artController.postArt, (req, res) => {
  res.redirect('/');
});

router.delete('/:id', artController.deleteArt, (req, res) => {
  res.redirect('/adsfasdf');
});

module.exports = router;