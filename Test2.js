'use strict';

const rl = require('readline').createInterface({input: require('fs').createReadStream('Test1.txt'),output:{}});
var s = "";
rl.on('line', line => s += line + "\n")
  .on('close',() => console.log(s));