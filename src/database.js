'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:test', function(err) {
  if(err) {
    console.log('Failed to connect to Mongodb.');
  } else {
    console.log('Sucessfully connected to Mongodb.');
  }
});


var userSchema= mongoose.Schema({
  name: String,
});

var User = mongoose.model('User', userSchema);

module.exports = User;
