
// cant'n change value of const variables...

const name = 'Deepak';
name  = 'Panny';

console.log(name);


// var is function scoped and let, const are block scoped...


function DriverLicence(testPassed){

  if (testPassed) {
    var name = 'Deepak';
    var yearOfBirth = 1999;
  }

  console.log(name);
  console.log(yearOfBirth);

}


function DriverLicence(testPassed){
  let name;
  const yearOfBirth = 1999;
  if (testPassed) {
    name = 'Deepak';
      //yearOfBirth = 1999;
  }

  console.log(name);
  console.log(yearOfBirth);

}


DriverLicence(true);


// Practical Example...

let i = 23;

for (let i = 0; i < 5; i++) {

}

console.log(i);


var x = 23;

for (var x = 0; x < 5; x++) {
  // body...
}

console.log(x);
