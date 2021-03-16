'use strict';

const http = require('http');
const rl = require('readline').createInterface({input: require('fs').createReadStream('./Test1.txt'),output:{}});
var s = "";
rl.on('line', line => s += line + "\n")
  .on('close',() => console.log(s));
const server = http.createServer((req, res) =>{
    console.log(new Date());
//    console.log(req);
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    res.write('<h1>' + s + '</h1>');
    res.end();
});
server.listen(8000, () => {
    console.log("server on");
})