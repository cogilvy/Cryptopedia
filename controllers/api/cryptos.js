const axios = require('axios');

const CMC_API_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const options = {
  'X-CMC_PRO_API_KEY': process.env.API_KEY
};


module.exports = {
  fetchTop100,
};

async function fetchTop100(req, res) {
  const apiResponse = await axios.get(CMC_API_URL, {headers: options});
  // console.log(apiResponse)
  res.json(apiResponse.data.data);
}