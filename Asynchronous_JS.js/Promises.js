
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



getIDs().then((IDs)=>{
    console.log(IDs);
    return getRecipe(IDs[2]);
}).then((es)=>{
    console.log(es);
    return getRelated('deepakcodefreak')
}).then((es2)=>{
  console.log(es2);
}).catch((error)=>{
  console.error(error);
})
