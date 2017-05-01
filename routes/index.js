var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var collection = db.get('matches');
  collection.find({},{},function(err, results){
    res.render('index', {
      title: "Latest Fantasy Matches",
      matches: results
    });
  });
});

module.exports = router;
