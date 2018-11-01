const second = () => {
  setTimeout(()=>{
    console.log('second');
  },2000)
}


const first  = () => {
  console.log('hey there');
  second();
  console.log('The End');
}

first();
