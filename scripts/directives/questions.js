angular.module('myQuiz')
.directive('questions', function (){
  return {
    templateUrl: 'templates/question.html',
    controller: 'QuizController',
    replace: true
  }
})
