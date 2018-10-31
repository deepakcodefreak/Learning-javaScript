// ES5 .....


//
// function Person(name,birthYear,job){
//   this.name = name;
//   this.job = job;
//   this.birthYear = birthYear;
// }
//
// Person.prototype.calAge = function () {
//   let age = new Date().getFullYear() - this.birthYear;
//   console.log(age);
// };
//
//
//
// function athele(name,birthYear,job,olympicGames,medals){
//     Person.call(this,name,birthYear,job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
// }
//
// athele.prototype = Object.create(Person.prototype);
//
// var john = new athele('john',1999,'Racer',10,15);
// john.calAge();
//


//ES6 ....



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


class Athele6 extends Person6{

  constructor(name,birthYear,job,olympicGames,medals){
    super(name,birthYear,job);
      this.olympicGames = olympicGames;
      this.medals = medals;
  }

  wonMedal(){
    this.medals++;
    console.log(this.medals);
  }

}


let mike = new Athele6('Mike',1998,'long jumper',20,40);
console.log(mike);
mike.calAge();
mike.wonMedal();
console.log(mike);
