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

/* GET New User page. */
router.get('/add-match', function(req, res) {
  res.render('add-match', { title: 'Add New Match' });
});

/* POST to Add User Service */
router.post('/add-match', function(req, res) {
  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var stipulation = req.body.stipulation;
  var event = req.body.event;
  var timeLimit = req.body.timeLimit;

  // Set our collection
  var collection = db.get('fantasyBooker');

  // Submit to the DB
  collection.insert({
    "stipulation" : stipulation,
    "event" : event,
    "timeLimit" : timeLimit
  }, function (err, doc) {
    if (err) {
      // If it failed, return error
      res.send("There was a problem adding the information to the database.");
    }
    else {
      // And forward to success page
      res.redirect("/");
    }
  });
});

module.exports = router;
