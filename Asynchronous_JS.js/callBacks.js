
function getRecipie(){

    setTimeout(()=>{
      const recipies = [210,154,784,965];
      console.log(recipies);
        setTimeout((id)=>{
            const recepie = {
              name:'Tomato Pasta',
              publisher:'deepakcodefreak'
            }
          console.log(`${recepie.name}`);

            setTimeout((publisher)=>{

                const receipe2 = {
                  name:'White Pasta',
                  publisher:'deepakcodefreak'
                }

                console.log(`${receipe2.name} by ${publisher}`);

            },1000,recepie.publisher)

        },1500,recipies[2])

    },2000)
}

getRecipie();
