var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/questions');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var userDataSchema = new Schema({
  name: String,
  email: String,
  question: {type: String, required: true},
  answers: {type: String, required: true},
  correct: {type: String, required: true},
}, {collection: 'user-data'});

var UserData = mongoose.model('UserData', userDataSchema);



router.get('/get-data', function(req, res, next) {
  UserData.find()
      .then(function(doc) {
        res.render('index', {items: doc});
      });
});

router.post('/insert', function(req, res, next) {
  var item = {
    question: req.body.question,
    answers: req.body.answers,
    correct: req.body.correct
  };
  var data = new UserData(item);
  data.save();
  res.redirect('/get-data');
});


module.exports = router;
