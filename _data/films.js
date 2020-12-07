const axios = require("axios");

module.exports = async function() {
  try {
    const response = await axios.get('https://swapi.dev/api/films/');
    return response.data;
  } catch (error) {
    console.error(error);
  }
  

};
