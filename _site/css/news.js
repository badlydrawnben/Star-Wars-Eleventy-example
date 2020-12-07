const axios = require("axios");
console.log('BWARP');
module.exports = async function() {
  try {
    const response = await axios.get('https://swapi.dev/api/films/');
    console.log(response.data);
    console.log('BWARP');
    return response.data;
  } catch (error) {
    console.error(error);
  }
  console.log('BWARP3');

};