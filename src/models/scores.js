'use strict';

var mongoose = require('mongoose');

var scoreSchema= new mongoose.Schema({
  name: String,
  percent: Number
});

var model = mongoose.model('Score', scoreSchema);

module.exports = model;
