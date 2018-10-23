// // // // // // var johnAge,markAge,johnMass,markMass;
// // // // // // johnHeight = 5.5;
// // // // // // johnMass = 60;
// // // // // // markHeight = 4.9;
// // // // // // markMass = 55;
// // // // // //
// // // // // // var mgj = (markMass/(markHeight*markHeight)) > (johnMass/(johnHeight*johnHeight));
// // // // // //
// // // // // // console.log('Is BMI of mark is greater than john ? '+ mgj);
// // // // //
// // // // //
// // // // // // var job;
// // // // // //
// // // // // // switch (job) {
// // // // // //   case 'teacher':
// // // // // //     console.log('Teacher teaches the coding');
// // // // // //     break;
// // // // // //   case 'engineer':
// // // // // //     console.log('An engineer in company and keep the bugs away');
// // // // // //     break;
// // // // // //   case 'doctor':
// // // // // //     console.log('an apple a day keeps the doctor away');
// // // // // //     break;
// // // // // //   default:
// // // // // //     console.log('engineers are superStars');
// // // // // //
// // // // // // }
// // // // //
// // // // //
// // // // // var johnS1,johnS2,johnS3;
// // // // // var markS1,markS2,markS3;
// // // // // var marryS1,marryS2,marryS3;
// // // // //
// // // // //
// // // // // johnS1 = 89;
// // // // // johnS2 = 120;
// // // // // johnS3 = 103;
// // // // //
// // // // //
// // // // // markS1 = 116;
// // // // // markS2 = 94;
// // // // // markS3 = 126;
// // // // //
// // // // // marryS1 = 97;
// // // // // marryS2 = 134;
// // // // // marryS3 = 105;
// // // // //
// // // // //
// // // // // avgJohn = (johnS1+johnS2+johnS3)/3;
// // // // // avgmark = (markS1+markS2+markS3)/3;
// // // // // avgmarry = (marryS1+marryS2+marryS3)/3;
// // // // //
// // // // //
// // // // // if(avgJohn>avgmark && avgmarry){
// // // // //   console.log('John is the winner');
// // // // // }else if(avgmark>avgJohn && avgmark>avgmarry){
// // // // //   console.log('Mark is the winner');
// // // // // }else if(avgmarry>avgJohn && avgmarry>avgmark){
// // // // //   console.log('Marry is the winner');
// // // // // }else if(avgJohn === avgmarry){
// // // // //   console.log('Tie between John and Marry ');
// // // // // }else if(avgmarry === avgmark){
// // // // //   console.log('Tie between Mark and Marry ');
// // // // // }else if(avgJohn === avgmark){
// // // // //   console.log('Tie between John and Mark ');
// // // // // }
// // // // //
// // // // //
// // // // // var names = ['john','mike','marry'];
// // // // // var years = new Array(19880,1999,1994);
// // // // //
// // // // // console.log(names[names.length-1]);
// // // // // console.log(names.length);
// // // //
// // // //
// // // //
// // // // var bills = [124,48,268];
// // // // var tips = [];
// // // // var finalBills = [];
// // // //
// // // // //function expression
// // // // var tipCalculator = function(amount){
// // // //     if (amount<50) {
// // // //       return ((amount*20)/100);
// // // //     }else if(amount > 50 && amount < 200){
// // // //       return ((amount*15)/100);
// // // //     }else if(amount>200){
// // // //       return ((amount*10)/100);
// // // //     }
// // // // }
// // // //
// // // // for (let i = 0; i < bills.length; i++) {
// // // //   tips.push(tipCalculator(bills[i]));
// // // // }
// // // //
// // // // for (let i = 0; i < bills.length; i++) {
// // // //   tips.push(tipCalculator(bills[i]) + bills[i]);
// // // // }
// // // //
// // // // for (let i = 0; i < bills.length; i++) {
// // // //   console.log(bills[i]);
// // // // }
// // // //
// // // //
// // // // //console.log('****************');
// // // //
// // // // for (let i = 0; i < tips.length; i++) {
// // // //   console.log(tips[i]);
// // // // }
// // // //
// // // // //console.log('****************');
// // // //
// // // // for (let i = 0; i < finalBills.length; i++) {
// // // //   console.log(finalBills[i]);
// // // // }
// // // //
// // // // var john  = {
// // // //   name:'Deepak',
// // // //   birthYear:1990,
// // // //   calAge : function(){
// // // //     this.age =  2018 - this.birthYear;
// // // //   }
// // // // };
// // // //
// // // // john.calAge();
// // // // console.log(john.age);console.log(john);
// // //
// // //
// // // var john = {
// // //   name:'john',
// // //   mass:60,
// // //   height:4.6,
// // //   calBMI:function(){
// // //     this.bmi= this.mass/(this.height*this.height);
// // //     return this.bmi;
// // //   }
// // // }
// // //
// // //
// // // var mike = {
// // //   name:'mike',
// // //   mass:50,
// // //   height:5.5,
// // //   calBMI:function(){
// // //     this.bmi = this.mass/(this.height*this.height);
// // //     return this.bmi;
// // //   }
// // // }
// // //
// // //
// // // john.calBMI();
// // // mike.calBMI();
// // // console.log(john.calBMI());
// // // console.log(mike.calBMI());
// // //
// // //
// // // // console.log(john);
// // // // console.log(mike);
// // //
// // // john.bmi>mike.bmi?console.log('John has more BMI'):console.log('Mike has more BMI');
// //
// // //
// // // var john = ['john','smith',1986,24,'Dc loves panny'];
// // //
// // // for (let i = 0; i < john.length; i++) {
// // //   if (typeof john[i] !== 'string') {
// // //     continue;
// // //   }
// // //
// // //   console.log(john[i]);
// // // }
// //
// //
// // //
// // // var calAge = function(birthYear){
// // //   console.log(2018-birthYear);
// // // }
// // //
// // // calAge(1994);
// //
// //
// // function first()
// // {
// //   var x = 5;                    //Wow i have defined function inside function ..yipeee and also do lexical scoping
// //   second();
// //   function second() {
// //     console.log(x+4);
// //   }
// // }
// //
// // first();
// calAge(1999);
//
// function calAge(birthYear)
// {
//   console.log(2018-birthYear);
//   console.log(this);            //in regular function call this->window object
// }

var john = {
  name:'John',
  gender:'Male',
  calAge:function(){
    console.log(this);
    function innerFunction(){
      console.log(this);
    }
    innerFunction();
  }
}


john.calAge();
