'use strict';
const rl = require('readline').createInterface({input: require('fs').createReadStream('Test1.txt'),output:{}});
const ws = require('fs').createWriteStream("Test2.txt");
var s = "";
rl
  .on('line', line => s += line + "\n")
  .on('close',() => {
    ws.write(s, e => console.log(e));
    ws.close();
  });
