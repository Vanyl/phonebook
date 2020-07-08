var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url = 'mongodb://localhost:27017/dbPhonebook';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
