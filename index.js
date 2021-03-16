'use strict';

const http = require('http');
const server = http.createServer((req, res) =>{
    console.log(new Date());
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });
    const rl = require('readline').createInterface({input: require('fs').createReadStream('Test1.txt'),output:{}});
    rl.on('line', line => res.write(line));
    res.end();
});
server.listen(8000, () => {
    console.log("server on");
})