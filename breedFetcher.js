// const { get } = require('request');
const request = require('request');
const breed = require(`./index`);

const fetchBreedDescription = (breed, callback) => {
  let query = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request.get(query, (error, response, body ) => {
    let data = JSON.parse(body)
    if (error){
      callback(error);
      return;
    }
    if(data[0] == undefined){
      callback(null, `${breed} not found, please input an existing cat breed.`)
      return;
    } else {
      callback(null, data[0].description)
    }
  });
};
module.exports = { fetchBreedDescription };




// let  breed  = fetchBreedDescription.input;`

// let askCat = (breed) => {
  
//   // let breed = breed;

//   let query = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

//   request.get(query, (error, response, body ) => {  
//    
//     let gato = JSON.parse(body)
//     if (error){
//      
//       return;
//     }
//     if(gato[0] == undefined){
//       console.log(`${breed} not found, please input an existing cat breed.`);
//       return;
//     }
//     console.log(breed);
//     console.log(gato[0].description);
    
//   });
// // console.log(breed);
// };