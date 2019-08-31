const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const { PORT } = process.env;
const dev = process.env.NODE_ENV !== 'production';

const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();
  server.use(cookieParser());
  server.use(bodyParser.urlencoded({extended: true}));
  server.use(bodyParser.json());

  server.post('/login', async (req, res) => {
    console.log('Express server logon post', req.query, req.body);
    app.render(req, res, '/login', req.query);
  });

  server.get('*', (req, res) => {
    const path = req.path;
    if (
      path.startsWith('_next') ||
      path.startsWith('/_next') ||
      path === '/favicon.ico'
    ) {
      return handle(req, res);
    } else if (
      path === '/login' ||
      path === '/about' ||
      path === '/detail' ||
      path === '/initial-props' ||
      path === '/settings'
    ) {
      console.log('express get: ', path);
      return handle(req, res);
    } else if (path.endsWith('.html')) {
      console.log('path ending .html:', path);
      const queryParams = {...req.query, cmsSectionName: path.substring(1, path.length - 5)};
      app.render(req, res, '/cms-section', queryParams);
    } else {
      const queryParams = {...req.query, path};
      app.render(req, res, '/index', queryParams);
    }
  });

  server.listen(PORT, err => {
    if (err) {
      throw err;
    }
    console.log(`Web Server is running on PORT ${PORT}`);
  });
})
.catch(ex => {
  console.error(ex.stack);
  process.exit(1);
});