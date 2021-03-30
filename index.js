'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(302, {
    Location: 'https://mikan-777-star.github.io/Mikan_1/'
  });
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});
