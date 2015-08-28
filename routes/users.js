var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Yolo bitches.  Always wear a helmet.');
});

module.exports = router;
