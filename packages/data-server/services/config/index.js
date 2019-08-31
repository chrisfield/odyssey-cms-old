const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.get('*', (_, res) => {
  const configFilePath = path.join(__dirname, 'data.json');
  fs.readFile(configFilePath, 'utf8', (err, jsonString) => {
    if (err) {
      console.error("File read failed:", err)
      res.json({err});
    }
    res.json(JSON.parse(jsonString));
  })
});

module.exports = router;
