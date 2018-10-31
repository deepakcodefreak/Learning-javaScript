// Default parameters....


// ES5 way...
function smithPerson(firstName,yearOfBirth,lastName,nationality){

  lastName === undefined ? lastName = 'Chawla': lastName = lastName;
  nationality === undefined ? nationality = 'Indian' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

let john = new smithPerson('Deepak',1999);
console.log(john);


// ES6 way...
//
function deepakPerson(firstName,yearOfBirth,nationality = 'Indian',lastName = 'Chawla'){

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;

}

let deepna = new deepakPerson('Deepna',1999);
console.log(deepna);
