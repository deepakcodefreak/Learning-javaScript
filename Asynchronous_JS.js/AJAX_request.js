

async function getWeather(){

try {

    const result = await fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/2487956/`);
    const data = await result.json();
    console.log(data);
    return data;
} catch (err) {
  console.error(error);
  }

}

getWeather(result).then(()=>{
  console.log(result);
})
