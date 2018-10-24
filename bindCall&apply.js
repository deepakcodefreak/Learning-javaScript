// var john = {
//   name:'John',
//   age:19,
//   sex:'Male',
//   job:'Backend Developer',
//   presentation: function(type,time){
//     if (type === 'formal') {
//       console.log(`Good ${time} Ladies and GentleMen , i am ${this.name} , i am a ${this.job} and ${this.age} years old`);
//     }else if(type === 'friendly'){
//       console.log(`hey whatsupp guys , i am ${this.name} , i am a ${this.job} and ${this.age} years old`);
//     }
//   }
// }
//
//
// john.presentation('friendly','Morning');
//
// var simmi = {
//   name:'Simmi',
//   age:20,
//   sex:'Female',
//   job:'FrondEnd Developer'
// }
//
//
// john.presentation.call(simmi,'formal','Evening');
// //john.presentation.apply(simmi,['fomal','Evening']);
//
// var simmiFormal = john.presentation.bind(simmi,'formal');
// simmiFormal('night');


// =====================================================

var years = [1999,1998,2005,1964,1993];

 function calArray(arr,fn){
  var resArray = [];

  for (let i = 0; i < arr.length; i++) {
    resArray.push(fn(arr[i]));
  }

  return resArray;
}


function calculateAge(el){
  return 2018 - el;
}

function isFullAge(limit,el){
  return el >= limit;
}

var ages = calArray(years,calculateAge)
var fullJapan = calArray(ages,isFullAge.bind(this,20));
console.log(ages);
console.log(fullJapan);
