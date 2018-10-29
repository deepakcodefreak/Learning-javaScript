
//ES5...
//
// var names = ['john','smith'];
// var firstName = names[0];
// var lastName = names[1];
// console.log(lastName);
// console.log(firstName);


// ES6...

//
// const [firstName,lastName] = ['Deepak','Chawla'];
//
// console.log(firstName);
// console.log(lastName);
//
//
// const obj = {
//   firstName:'Abhishek',
//   lastName:'Chaudhary',
// };
//
// // const {firstName,lastName} = obj;
// //
// // console.log(firstName);
// // console.log(lastName);
//
// const {firstName : a,lastName: b} = obj;
// console.log(a);
// console.log(b);
//



var calAgeRetirement = function(birthYear){
  var age = new Date().getFullYear() - birthYear;

  return [age,65-age]
}


const [a,b] = calAgeRetirement(1999);
console.log(a);
console.log(b);
