function addFourAges(a,b,c,d){
  return a+b+c+d;
}

var sum1 = addFourAges(18,49,74,46);
console.log(sum1);

const numbers = [18,49,74,46]

var sum2 = addFourAges.apply(null,numbers);
console.log(sum2);

// ES6....

const sum3 = addFourAges(...numbers);
console.log(sum3);


// one more use case of this spread(...) opeartor

const aFamily = ['Abhishek','Deepak','Yogesh'];
const bFamily = ['Subham','Vishnu','Nishant'];

const newFamily = [...aFamily,'newBaby',...bFamily];
console.log(newFamily);



// ...... one practical use ...

const h = document.querySelector('h1');
const boxesSpread = document.querySelectorAll('.box');
const all = [h,...boxesSpread];
const newArray = Array.from(all);



for(let cur of newArray) {
    cur.style.color = 'purple';
  }
