const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.get(/^\/(.+)/, (req, res) => {
  const sectionPath = req.params[0];
  const sectionFilePath = path.join(__dirname, 'data', `${sectionPath}.json`);
  fs.readFile(sectionFilePath, 'utf8', (err, jsonString) => {
    if (err) {
      console.error("File read failed:", err)
      res.json({err});
    }
    res.json(JSON.parse(jsonString));
  })
});

module.exports = router;
