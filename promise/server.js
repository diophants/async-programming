'use strict';

const http = require('http');
const url = require('url');

const PROT = 3000;

const routes = {
  '/': (request, callback) => {
    callback({
      apiVersion: 1.0,
      content: ['person', 'city'],
    });
  },
  '/person': (request, callback) => {
    callback({
      name: '208',
      wallet: 42,
    });
  },
  '/city': (request, callback) => {
    callback({
      name: 'San-Francisco',
      country: 'USA',
    });
  },
};

const server = http.createServer((req, res) => {
  const parseURL = url.parse(req.url);
  let path = parseURL.pathname;
  if (path.endsWith('/') && path.length > 1) {
    path = path.slice(0, -1);
  }

  const handler = routes[path];
  if (!handler) {
    res.writeHead(404);
    res.end('not found');
    return;
  }

  handler(req, (result) => {
    const json = JSON.stringify(result);
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(json);
  });
});

server.listen(PROT, () => {
  console.log(
    `Server is running: http://localhost:${PROT}`
  );
});
