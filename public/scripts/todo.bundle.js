webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('theQuiz', []);

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('theQuiz')
	.controller('QuizController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
	    $scope.score = 0;
	    $scope.activeQuestion = -1;
	    $scope.activeQuestionAnswered = 0;
	    $scope.percentage = 0;

	    $http.get('mock/quiz_data.json').then(function(quizData){
	      $scope.myQuestions = quizData.data;
	      $scope.totalQuestions = $scope.myQuestions.length;
	    });

	    $scope.selectAnswer = function(qIndex, aIndex) {
	      var questionState = $scope.myQuestions[qIndex].questionState;

	      if(questionState != 'answered'){
	        $scope.myQuestions[qIndex].selectedAnswer =  aIndex;
	        var correctAnswer = $scope.myQuestions[qIndex].correct;
	        $scope.myQuestions[qIndex].correctAnswer = correctAnswer;
	        if( aIndex === correctAnswer ){
	          $scope.myQuestions[qIndex].correctness = 'correct';
	          $scope.score += 1;
	        }else{
	          $scope.myQuestions[qIndex].correctness = 'incorrect';
	        }
	        $scope.myQuestions[qIndex].questionState = 'answered';
	      }
	      $scope.percentage = (($scope.score / $scope.totalQuestions) * 100).toFixed(1);
	    }
	    $scope.isSelected = function(qIndex, aIndex) {
	      return $scope.myQuestions[qIndex].selectedAnswer === aIndex;
	    }
	    $scope.isCorrect = function(qIndex, aIndex) {
	      return $scope.myQuestions[qIndex].correctAnswer === aIndex;
	    }
	    $scope.selectContinue = function() {
	      return $scope.activeQuestion += 1;
	    }
	    $scope.createShareLinks =function(percentage) {
	      var url = 'http://codifydesign.com';

	      var emailLink ='<a class="btn email" href="mailto:?subject=Try to beat my quiz score!&amp;body=I scored '+ percentage +'% on this Doctor Who quiz. Try to beat my score at '+ url +'"">Email a friend</a>';

	      var twitterLink ='<a class="btn twitter" href=https://twitter.com/intent/tweet?text=I scored '+ percentage +'% on this Doctor Who quiz. Try to beat my score at&amp;hashtags=DoctorWhoQuiz&amp;url='+ url +'">Tweet your score</a>';

	      var newMarkup = emailLink + twitterLink;

	      return $sce.trustAsHtml(newMarkup);
	    }

	  }]);


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);

	angular.module('theQuiz')
	.directive('questions', function (){
	  return {
	    templateUrl: 'templates/questions.html',
	    controller: 'QuizController',
	    replace: true
	  }
	})


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('theQuiz')
	.service('dataService', function($http) {
	  this.getQuestions = function(callback){
	    $http.get('/api/quiz').then(callback);
	  };

	});


/***/ }
]);