var express = require('express');
var router = express.Router();

/* GET another page. */
router.get('/anotherpage', function(req, res, next) {
  res.render('anotherpage', { title: 'New Page' });
});

module.exports = router;
