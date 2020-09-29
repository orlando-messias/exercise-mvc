const axios = require('axios');

const URL = 'https://api.chucknorris.io/jokes/categories';

async function getCategories() {
  return (await axios(URL)).data;
}

module.exports = { getCategories };