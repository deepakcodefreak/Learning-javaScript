

// ES5...

var box = {
  color: "green",
  position : 1,
  clickMe : function(){
    var self = this;
    document.querySelector('.green').addEventListener('click',function(){
      alert('The box is of ' + self.color + ' color at position - ' + self.position);
    })

  }
}

box.clickMe();


// ES6


var box = {
  color: "green",
  position : 1,
  clickMe : () => {

    document.querySelector('.green').addEventListener('click',()=>{
      alert(`box is of number ${this.position} and color ${this.color}`)
    })

  }
}

box.clickMe();

//ES5

function Person(name){
  this.name = name;
}

Person.prototype.myFriends = function(friends) {

    var arr = friends.map(function(el){
      return `${this.name} is friend with ${el}`
    }.bind(this))

    console.log(arr);

};

new Person('john').myFriends(['Deepak','Abhishek'])


//ES6


function Person(name){
  this.name = name;
}

Person.prototype.myFriends = function(friends){

    var arr = friends.map((el)=>{
      return `${this.name} is friend with ${el}`
    })

    console.log(arr);

};

new Person('john').myFriends(['Deepak','Abhishek'])
