'use strict';

new Promise((resolve) => {
    const date = new Date();
    resolve(date);
})
.then((date) => {
    const days = {
        month : date.getMonth(),
        day : date.getDate()
    };
    return new Promise((resolve)=>{
        resolve(days);
    });
})
.then((days) => {
    const text = `今日は${days.month + 1}月${days.day}日だぞーぉ`;
    return new Promise((resolve) => {
        resolve(text);
    })
})
.then((text) => {
    console.info(text);
});