'use strict';

angular.module('theQuiz')
  this.getQuestions = function(callback){
    $http.get('mock/quiz_data.json')
    .then(callback)
  };
