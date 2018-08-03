var express = require("express");
var router = express.Router();


var burger = require("../models/burger.js");

//routes and logic
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

// Export routes for server.js to use.
module.exports = router;