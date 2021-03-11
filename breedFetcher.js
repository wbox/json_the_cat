const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  const url = "https://api.thecatapi.com/v1/images/search?breed_ids=" + breedName.slice(0,4).toLowerCase();

  request(url, (error, response, body) => {

    if (JSON.parse(body).length === 0) {
      callback("Breed not found",body);
    } else {
      callback(error,JSON.parse(body)[0].breeds[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };