//call orm
var orm = require("../config/orm.js");

//define burger, import orm function
var burger = {
	// selectAll function gets all the burgers
	selectAll: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res);
		});
	},
	// insertOne function adds new burger
	insertOne: function(cols, vals, cb) {
		orm.insertOne('burgers', cols, vals, function(res) {
			cb(res);
		});
	},
	// updateOne changes burger status to devoured
	updateOne: function(objColVals, condition, cb) {
		orm.updateOne('burgers', objColVals, condition, function(res) {
			cb(res);
		});
	}
}

///burger.selectAll()

module.exports = burger;