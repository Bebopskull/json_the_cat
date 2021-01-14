// const { get } = require('request');
const request = require('request');
const input = process.argv.slice(2);

const askCat = () => {

  let breed = input[0];

  let query = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request.get(query, (error, response, body ) => {  
    // console.log(response)
    let gato = JSON.parse(body)
    if (error){
      // console.log(error)
      return;
    }
    if(gato[0] == undefined){
      console.log(`${breed} not found, please input an existing cat breed.`);
      return;
    }
    console.log(breed);
    console.log(gato[0].description);
    
  });
// console.log(breed);
};

askCat();

