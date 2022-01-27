const express = require('express');
const router = express.Router();
const artController = require('../controller/artController.js');

router.get('/', artController.getArt, (req, res) => {
  return res.status(200).json(res.locals);
});

router.post('/', artController.postArt, (req, res) => {
  return res.redirect('/');
});

router.delete('/:id', artController.deleteArt, (req, res) => {
  return res.redirect('/');
});

router.patch('/:id', artController.patchArt, (req, res) => {
  return res.status(200).json(res.locals);
});

module.exports = router;