var express = require('express');
var router = express.Router();

/* GET New User page. */
router.get('/:stipulation', function(req, res) {

  var db = req.db;
  var collection = db.get('matches');

  collection.find({stipulation: req.params.stipulation}, {sort: {date: -1}}, function(err, results) {

    res.render('stipulation', {
      'title': req.params.stipulation + " Matches",
      'matches': results,
      'json': JSON.stringify(results)
    });
  });
});

module.exports = router;
