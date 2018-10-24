function genrateQuestion(ques,options,answer){
  this.ques = ques;
  this.options = options;
  this.answer = answer;
  this.printQuestion = function(){
    console.log(this.ques);
    for (let i = 0; i < options.length; i++) {
      console.log(`${i+1} ${options[i]}`);
    }
  }
}

var enggQues = new genrateQuestion('what is your branch',['CSE','IT','MECH','ECE',],0)
var js = new genrateQuestion('Js is Love ',['YES','No'],0);
var backend = new genrateQuestion('Which is the best server side Technology ?',['PHP','DJANGO','NODE JS','RUBY ON RAILS'],2);

var questions = [enggQues,js,backend];

//enggQues.printQuestion();
//var answer = prompt('enter you option')

function generateRandom(){
  var random = Math.random()*4+1;
  console.log(random);
}
