var express = require('express');
var router = express.Router();

/* GET New User page. */
// NOTE - you need to get the index of the route that has been defined in app.js
router.get('/', function(req, res) {
  res.render('book-match', { title: 'Book Your Fantasy Match' });
});

/* POST to Add User Service */
router.post('/', function(req, res) {
  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var wrestlers = req.body.wrestlers;
  var stipulation = req.body.stipulation;
  var event = req.body.event;
  var timeLimit = req.body.timeLimit;
  // Create date
  var dateCreated = new Date();

  // Set our collection
  var collection = db.get('matches');

  // Submit to the DB
  collection.insert({
    "wrestlers": wrestlers,
    "stipulation": stipulation,
    "event": event,
    "timeLimit": timeLimit,
    "date": dateCreated
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
