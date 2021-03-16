'use strict';

const http = require('http');
const server = http.createServer((req, res) =>{
    console.log(new Date());
    console.log(req);
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    const rl = require('readline').createInterface({input: require('fs').createReadStream('./Test1.txt'),output:{}});
    let s = '<h1>'
    rl.on('line', line => s += line + '<br>');
    res.write(s + '</h1>');
    res.end();
});
server.listen(8000, () => {
    console.log("server on");
})
