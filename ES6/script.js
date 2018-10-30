//
//
// // ES5...
//
// var box = {
//   color: "green",
//   position : 1,
//   clickMe : function(){
//     var self = this;
//     document.querySelector('.green').addEventListener('click',function(){
//       alert('The box is of ' + self.color + ' color at position - ' + self.position);
//     })
//
//   }
// }
//
// box.clickMe();
//
//
// // ES6
//
//
// var box = {
//   color: "green",
//   position : 1,
//   clickMe : () => {
//
//     document.querySelector('.green').addEventListener('click',()=>{
//       alert(`box is of number ${this.position} and color ${this.color}`)
//     })
//
//   }
// }
//
// box.clickMe();
//
// //ES5
//
// function Person(name){
//   this.name = name;
// }
//
// Person.prototype.myFriends = function(friends) {
//
//     var arr = friends.map(function(el){
//       return `${this.name} is friend with ${el}`
//     }.bind(this))
//
//     console.log(arr);
//
// };
//
// new Person('john').myFriends(['Deepak','Abhishek'])
//
//
// //ES6
//
//
// function Person(name){
//   this.name = name;
// }
//
// Person.prototype.myFriends = function(friends){
//
//     var arr = friends.map((el)=>{
//       return `${this.name} is friend with ${el}`
//     })
//
//     console.log(arr);
//
// };
//
// new Person('john').myFriends(['Deepak','Abhishek'])


//const boxes = document.querySelectorAll('.box');


//ES5
var boxes = document.querySelectorAll('.box');

// var boxes5 = Array.prototype.slice.call(boxes);
//
// boxes5.forEach(function(current){
//   current.style.backgroundColor = 'red';
// })
//

//ES6

Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue')


//
// var boxes5 = Array.prototype.slice.call(boxes);
//
// for (let i = 0; i < boxes5.length; i++) {
//
//         if (boxes5[i].className === 'box blue') {
//           continue;
//         }
//
//       boxes5[i].textContent = 'i am changed to blue'
//
// }
//



const boxes6 = Array.from(boxes);

for (let cur of boxes6) {

        if (cur.className.includes('blue')) {
          continue;
        }

        cur.textContent = 'i am changed to blue';

  }






var ages = [11,10,18,21,6,9];
//
// var full = ages.map(function(current){
//   return current >= 18;
// })
//
//
// console.log(full.indexOf(true));
//
// console.log(ages[full.indexOf(true)]);
//



console.log(ages.findIndex( cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
