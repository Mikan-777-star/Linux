'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.end('hi');
});
const port = 8000;
server.listen(port, () => {
  const now = Date.now();
  res.setHeader('Set-Cookie', 'last_access = '+ now + ';');
  console.info('Listening on ' + port);
});
