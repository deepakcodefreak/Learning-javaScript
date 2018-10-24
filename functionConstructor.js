// var Person = function(name,yearOfBirth,job){
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//   }
//
// Person.prototype.calculateAge = function(){
//     return (2018- this.yearOfBirth);
// }
//
// Person.prototype.lastName = 'Chawla';
//
//
//
// var john = new Person('Deepak',1999,'Backend Developer');
// //console.log(john);
//
//
// console.log(john.calculateAge());
// console.log(john.lastName);

//
// var Person_Proto = {
//   calculateAge:function(){
//     console.log(2018-this.yearOfBirth);
//   }
// }
//
// var john = Object.create(Person_Proto);
// john.name = 'john';
// john.sex = 'Male';
// john.yearOfBirth = 1999;
//
//
//
// var jane = Object.create(Person_Proto,{
//   name : {value:'Jane'},
//   yearOfBirth : {value : 1998},
//   sex:{value:'Female'}
// })


//Function Objects...
//
// var years = [1999,1998,2005,1964,1993];
//
//  function calArray(arr,fn){
//   var resArray = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     resArray.push(fn(arr[i]));
//   }
//
//   return resArray;
// }
//
//
// function calculateAge(el){
//   return 2018 - el;
// }
//
// function isFullAge(el){
//   return el >= 18;
// }
//
// function maxHeartRate(el){
//   if (el>=18 && el<= 81) {
//     return Math.round(206.9-(0.67*el));
//   }else {
//     return -1;
//   }
// }
//
//
// var ages = calArray(years,calculateAge);
// console.log(ages);
//
// var full = calArray(ages,isFullAge);
// console.log(full);
//
// var heartRates = calArray(ages,maxHeartRate);
// console.log(heartRates);



//Function returning function...

//
// var InterviewQuestions  = function(job){
//
//   if (job === 'teacher') {
//     return function(name){
//       console.log(`hey ${name} , what subject do you teach?`);
//     }}
//   else if(job === 'Backend Developer'){
//     return function(name){
//       console.log(`hey ${name}, which server side language do you used?`);
//     }
//   }
//   else {
//     return function(name){
//       console.log(`hey ${name}, what do you do ?`);
//     }
//       }
//
// }
//
//
//
// var teacherQuestion = InterviewQuestions('teacher');
// //var DeveloperQuestion = InterviewQuestions('Backend Developer');
// var random = InterviewQuestions('frondEnd Developer')
// teacherQuestion('Shashi chawla');
// //DeveloperQuestion('Deepak Chawla');
// random('Deepak Chawla');
//
// InterviewQuestions('Backend Developer')('Deepak Chawla');



// Closures

//
// function retirement(n){
//   var a = ' years left in the retirement';
//
//   return function(yearOfBirth){
//       var age = 2018 - yearOfBirth;
//       console.log((n-age)+a);
//   }
// }
//
//
// var retirementIndia = retirement(65);
// retirementIndia(1985);
//
// var retirementUs = retirement(66);
// retirementUs(1995);
//
//
// var InterviewQuestions = function(job){
//   return function(name){
//     if (job === 'teacher') {
//       console.log(`hey ${name}, what subject do you teach?`);
//     }else if (job === 'Backend Developer') {
//       console.log(`hey ${name} which server side technology do you use?`);
//     }else {
//       console.log(`hey ${name} what do you do??s`);
//     }
//   }
// }
//
//
// InterviewQuestions('teacher')('Shashi chawla');
// InterviewQuestions('Backend Developer')('Deepak Chawla');
// InterviewQuestions('FrontEnd Developer')('Panny');



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

enggQues.printQuestion();
var answer = prompt('enter you option')

console.log('hello s');
