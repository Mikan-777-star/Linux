'use strict';
const http = require('http');
const server = http.createServer((i, i1) =>{
    i1.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    i1.write(i.headers['user-agent']);
    i.end();
})
const port = 8000;
server.listen(port, () => console.log('Listening on '+ port));