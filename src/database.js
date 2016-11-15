'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/DWQuiz', function(err) {
  if(err) {
    console.log('Failed to connect to Mongodb.');
  } else {
    console.log('Sucessfully connected to Mongodb.');
  }
});
