const request = require('request');
const args    = process.argv.slice(2);

let url = "https://api.thecatapi.com/v1/images/search?breed_ids=";
const breedName = args[0].slice(0,4).toLowerCase();

if (!breedName) {
  console.log("You need to provide the cat breed name!");
  return;
} else {
  url += breedName;
}

const getPage = (url) => {
  request(url, (error, response, body) => {

    if (error) {
      console.log('Error:', error); // Print the error if one occurred
      return;
    }
    
    const data = JSON.parse(body);

    if (data.length === 0) {
      console.log(`Breed ${breedName} not found.`);
      return;
    }

    console.log(data);

  });
};

if (!url) {
  console.log("This script requires url and filepath/name to work");
} else {
  getPage(url);
}