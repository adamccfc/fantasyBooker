var express = require('express');
var router = express.Router();

/* GET New User page. */
router.get('/', function(req, res) {
  res.render('match-types', { title: 'See different match types' });
});

module.exports = router;
