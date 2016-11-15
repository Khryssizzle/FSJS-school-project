'use strict';

var express = require('express');
var Quiz = require('../models/score.js');
// var quiz = require('../../public/mock/quiz_data.json');

var router = express.Router();

  router.get('/quiz', function(req, res) {
    Quiz.find({}, function(err, quiz) {
      if(err) {

      return res.status(500).json({message: err.message});
      }
      res.json({questions: quiz});
    });
  });

// todo: add post route to keep score
//
// todo: add put route to update score


module.exports = router;
