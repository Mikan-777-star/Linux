'use strict'
var i1 = 0;
var i2 = 1;
var temp;
for(let i = 0; i < 40; i++){
    console.log(i1);
    temp = i1;
    i1 = i2;
    i2 += temp;
}