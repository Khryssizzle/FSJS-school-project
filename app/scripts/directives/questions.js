var angular = require('angular');

angular.module('theQuiz')
.directive('questions', function (){
  return {
    templateUrl: 'templates/questions.html',
    controller: 'QuizController',
    replace: true
  }
})
