var express = require('express');
var router = express.Router();

/* GET another page. */
router.get('/', function(req, res, next) {
  res.render('anotherpage');
});

module.exports = router;
