(function(){

  //var score = 0;

  var score = function(){
    var sc = 0;
    return function(correct){
      if (correct) {
        sc++;
      }
      return sc;
    }
  }

var keepScore = score();


  function genrateQuestion(ques,options,answer){
    this.ques = ques;
    this.options = options;
    this.answer = answer;

  }

genrateQuestion.prototype.displayScore = function(score) {
  console.log(`your current score is ${score}`);
  console.log(`----------------------------------`);
};

  genrateQuestion.prototype.printQuestion = function() {
    console.log(this.ques);
    for (let i = 0; i < this.options.length; i++)
    {
      console.log(`${i} ${this.options[i]}`);
    }
  };

  genrateQuestion.prototype.checkAnswer = function(ans,callback) {
    var sc;
    if (ans === this.answer) {
      console.log('Correct answer');
      sc = callback(true);
      this.displayScore(sc);
    }else{
      console.log('Wrong answer');
      sc = callback(false);
      this.displayScore(sc);
    }

  };



      var enggQues = new genrateQuestion('what is your branch',['CSE','IT','MECH','ECE',],0)
      var js = new genrateQuestion('Js is Love ',['YES','No'],0);
      var backend = new genrateQuestion('Which is the best server side Technology ?',['PHP','DJANGO','NODE JS','RUBY ON RAILS'],2);
      var questions = [enggQues,js,backend];

      function nextQuestion(){

          var random = Math.floor(Math.random()*3);
          console.log(questions[random].printQuestion());
          let answer = prompt('Enter your result');

          if ( answer !== 'exit') {
              questions[random].checkAnswer(parseInt(answer),keepScore);
              nextQuestion();
            }

      }

console.log('hello panny');
nextQuestion();


})();
