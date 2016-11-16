'use strict';

var express = require('express');
var router = express.Router();
var User = require('../database');
var bodyParser = require('body-parser')

router.use(bodyParser.json());



router.post('/user', function (req, res) {
  var name = req.body.name;
  User.create(name, function (err, name) {
    if(err) {
      return res.status(500).json({err: err.message});
    }
    res.json({'name': name});
  });
});

module.exports = router;
