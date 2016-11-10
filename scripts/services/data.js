'use strict';

angular.module('myQuiz')
.service('dataService', function($http) {
  this.helloWorld = function() {
    console.log("This is the data service's method!!");
  };

  this.getQuestions = function(callback){
    $http.get('mock/quiz_data.json')
    .then(callback)
  };

});
