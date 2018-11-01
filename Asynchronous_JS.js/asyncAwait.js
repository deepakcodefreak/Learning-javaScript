function getIDs(){
  return new Promise((resolve,reject)=>{

      setTimeout(()=>{
        resolve([214,156,789,146]);
      },2000)

  })
}

function getRecipe(receipeId){

    return new Promise((resolve,reject)=>{
      setTimeout((id)=>{
          const receipe = {
            title: 'Tomato Pasta',
            publisher: 'deepakcodefreak'
          }
          resolve(`${receipe.title} by ${receipe.publisher}`)
      },1500,receipeId)
    })

}


function getRelated(publisher){

      return new Promise((resolve,reject)=>{
        setTimeout((pub)=>{
          const receipe2 = {
            title: 'White Pasta',
            publisher: 'deepakcodefreak'
          }
          resolve(`${receipe2.title} by ${publisher}`)
        },1000,publisher)
      })

}


async function getRecipiesAW(){

  const IDs = await getIDs();
  console.log(IDs);

  const receipe = await getRecipe(IDs[2]);
  console.log(receipe);

  const relatedReceipe = await getRelated('deepakcodefreak');
  console.log(relatedReceipe);

  return receipe;

}


getRecipiesAW().then((result)=>{
  console.log(result);
})
