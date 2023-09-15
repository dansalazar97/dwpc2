var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ITGAM', author: 'Daniel Salazar',
  style: './stylesheets/style.css'});
});

module.exports = router;