'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const now = Date.now();
  res.setHeader('Set-Cookie', 'last_access = '+ now + ';');
  res.setHeader("Set-Cookie", "Test1 = もんもぉ！");
  const last_access_time = req.headers.cookie ? parseInt(req.headers.cookie.split('last_access=')[1]) : now;
  const monmo = req.headers.cookie ? req.headers.cookie.split("Test1=")[1] : "シャミ子";
  res.end(new Date(last_access_time).toString());
  console.log(monmo);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});
