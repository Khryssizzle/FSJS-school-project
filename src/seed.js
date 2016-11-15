"use strict";

var Score = require('.models/scores.js');

var scores = [
  ['khryss', ],
  ['josh', 100]
];

scores.forEach(function(score, index) {
  Todo.find({'name': score}, function(err,scores) {
    if(!err && !scores.length) {
      score.create({name: score, percent: []});
    }
  })
})
