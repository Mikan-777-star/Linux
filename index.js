'use strict';

const http = require('http');
const rl = require('readline').createInterface({input: require('fs').createReadStream('./Test1.txt'),output:{}});
var s = "";
rl.on('line', line => s += line + "<br>")
  .on('close',() => console.log(s));
const server = http.createServer((req, res) =>{
    console.log(new Date() + 'Req by' + req.connection.remoteAddress);
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
//    console.log(req);
    switch(req.method){
        case 'GET' : {
            res.write('<h3>' + s + '</h3>');
        }
        break;
        case 'POST' : {
            let data = '';
            req
            .on('data', get => data += get)
            .on('end', () => console.log('[' + new Date() + '] Data posted: ' + get));
        }
        break;
        default:{}
        break;
    }
    res.end();
})
.on('error', e =>console.error(new Date() + " Server error " , e));
server.listen(8000, () => {
    console.log("server on");
})
