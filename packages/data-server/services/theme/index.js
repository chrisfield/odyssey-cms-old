const express = require('express');
const path = require('path');
const convertTheme = require('./convert-theme');

const router = express.Router();

router.get('/:theme', (req, res) => {
  const themeName = req.params.theme;
  const themePath = path.join('..', '..', 'themes', themeName);
  const theme = require(`${themePath}.js`);
  res.json(convertTheme(theme));
});

module.exports = router;
