
let question = new Map();

question.set('question','Which of the following is a city of haryana?');
question.set(1,'Hoshiarpur');
question.set(2,'Chandigardh');
question.set(3,'Rohini');
question.set(4,'Rohtak');
question.set('correct',4);
question.set(true,'Right answer!!');
question.set(false,'Wrong answer .... Try Again');

//console.log(question);
console.log(question.get('question'));
console.log(question.size);
// question.delete(4)
// console.log(question.has(4));
// question.clear();
// console.log(question);



// Iterating the map

// question.forEach((value,key) => {
//   console.log(`Key >: ${key} and its value >: ${value}`);
// })

for (let [key,value] of question) {

        if (typeof key === 'number') {
          console.log(value);
        }

  }


const ans = parseInt(prompt('Type the correct option '));


console.log(question.get(ans === question.get('correct')));
