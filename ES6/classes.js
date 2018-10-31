// ES5...

function Person(name,birthYear,job){
  this.name = name;
  this.job = job;
  this.birthYear = birthYear;
}

Person.prototype.calAge = function () {
  let age = new Date().getFullYear() - this.birthYear;
  console.log(age);
};

let john = new Person('John',1999,'Developer');
john.calAge();


// ES6...


class Person6{
  constructor(name,birthYear,job){
    this.name = name;
    this.job = job;
    this.birthYear = birthYear;
  }

  calAge(){
    let age = new Date().getFullYear() - this.birthYear;
    console.log(age);
    }

  static greetings(){
    console.log('Welcome DC... Deepak Chawla');
  }

}


let mike = new Person6('Mike',1998,'Full Stack Developer');
mike.calAge();
Person6.greetings();
