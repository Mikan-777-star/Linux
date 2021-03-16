'use strict';

const rl = require('readline').createInterface({input: require('fs').createReadStream('Test1.txt'),output:{}});
rl.on('line', line => console.log(line))
  .on('close',() => console.log("正常終了"));