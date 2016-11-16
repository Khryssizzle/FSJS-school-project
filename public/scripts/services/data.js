'use strict';



angular.module('theQuiz')
.service('dataService', function($http) {
  this.getQuestions = function(callback){
    $http.get('/api/quiz').then(callback);
  };



});
