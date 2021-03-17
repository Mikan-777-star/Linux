'use strict';
var s = "";
const rl = require('readline').createInterface({input: require('fs').createReadStream('./Test1.html'),output:{}});
rl.on('line', line => s += line + "\n");
const http = require('http');
const server = http.createServer((req, res) =>{
    console.log(new Date() + 'Req by' + req.connection.remoteAddress);
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
//    console.log(req);
    switch(req.method){
        case 'GET' : res.write(s);
        break;
        case 'POST' : {
            let data = '';
            req
            .on('data', get => data = get + data)
            .on('end', () => {
                const decoded = decodeURIComponent(data);
                console.info('[' + new Date() + '] 投稿: ' + decoded);
                res.write('<!DOCTYPE html><html lang="ja"><body><h1>' + decoded + 'が投稿されました</h1></body></html>');
            });
        }
        break;
        default:{res.write("<h1>ミカンママのおっぱい！<br>えっち！！</h1>")}
        break;
    }
    res.end();
})
.on('error', e =>console.error(new Date() + " Server error " , e));
server.listen(8000, () => {
    console.log("server on");
})
