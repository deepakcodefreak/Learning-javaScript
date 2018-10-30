// ES5 ....
//
var fullAge = function(limit){
    var birthYears = Array.prototype.slice.call(arguments,1);

      var fullAge = birthYears.forEach(function(cur){
          console.log((2018 - cur) >= limit);
      })

}


fullAge(21,1999,1845,2015,1964);


// ES6 ... way

function fullAge(limit,...years){
  years.forEach(cur => console.log((2018-cur) >= limit))
}


fullAge(21,1999,2015,1989,1964,1998);
