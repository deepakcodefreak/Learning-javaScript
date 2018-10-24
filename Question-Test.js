
(function(){

  function genrateQuestion(ques,options,answer){
    this.ques = ques;
    this.options = options;
    this.answer = answer;

  }

  genrateQuestion.prototype.printQuestion = function() {
    console.log(this.ques);
    for (let i = 0; i < this.options.length; i++)
    {
      console.log(`${i+1} ${this.options[i]}`);
    }
  };

  genrateQuestion.prototype.checkAnswer = function(ans) {
    if (ans === this.answer) {
      console.log('Correct answer');
    }else{
      console.log('Wrong answer');
    }

  };

  var enggQues = new genrateQuestion('what is your branch',['CSE','IT','MECH','ECE',],0)
  var js = new genrateQuestion('Js is Love ',['YES','No'],0);
  var backend = new genrateQuestion('Which is the best server side Technology ?',['PHP','DJANGO','NODE JS','RUBY ON RAILS'],2);

  var questions = [enggQues,js,backend];

  //enggQues.printQuestion();
  //var answer = prompt('enter you option')



    var random = Math.floor(Math.random()*3);
    console.log(questions[random].printQuestion());
    let answer = parseInt(prompt('Enter your result')-1);
    questions[random].checkAnswer(answer);

})();
