var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            console.log(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (id, condition, cb) {
        orm.update("burgers", id, condition, function (res) {
            cb(res);
        });
    },
}

burger.selectAll()

module.exports = burger;