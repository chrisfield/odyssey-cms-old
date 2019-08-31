const bodyParser = require('body-parser');
const chokidar = require('chokidar');
const cors = require('cors');
const express = require('express');
const path = require('path');

const { PORT } = process.env;
const app = express();

const themesFolder = path.join(__dirname, 'themes');
const watcher = chokidar.watch([themesFolder]);


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.use('/themes', require('./services/theme'));
app.use('/config', require('./services/config'));
app.use('/sections', require('./services/section'));

app.listen(PORT, () => {
  console.log(`data-server listening on port ${PORT}`);
});

watcher.on('ready', () => {
  watcher.on('all', () => {
    Object.keys(require.cache).forEach(id => {
      const regExp = new RegExp(themesFolder);
      if (regExp.test(id)) {
        console.log('clear cached theme file: ', id);
        delete require.cache[id];
      }
    });
  });
});
