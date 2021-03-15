'use strict';
module.exports = function (r) {
    r.hear(/hello>i/, function (msg) {
        var user_id = msg.message.user.id;
        msg.send("Hello,<@" + user_id + ">.\n Today is " + new Date());
    });
};
