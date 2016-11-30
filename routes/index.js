var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var collection = db.get('fantasyBooker');
  collection.find({},{},function(e,docs){
    res.render('index', {
      title: "Fantasy Booker",
      "matches" : docs
    });
  });
});

module.exports = router;
