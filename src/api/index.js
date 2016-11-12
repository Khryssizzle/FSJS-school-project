'use strict';

var express = require('express');
var quiz = require('../../public/mock/quiz_data.json');

var router = express.Router();

  router.get('/quiz', function(req, res) {
    res.json({questions: quiz});
  });

// todo: add post route to keep score
//
// todo: add put route to update score
//
// todo: add delete route to delete score

module.exports = router;
