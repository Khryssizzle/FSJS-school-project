var correctAnswers = 0;
var question;
var choices;
var answer;
var correct = [];
var wrong = [];

for(var i = 0; i < questions.length; i += 1) {
  question = questions[i].question;
  choices = questions[i].choices;
  answer = questions[i].answer;
  if(answer === "Affirmative!") {
    correctAnswers += 1;
  }
}
