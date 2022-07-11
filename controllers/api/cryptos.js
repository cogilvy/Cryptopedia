const axios = require('axios');

const CMC_TOP_100_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const CMC_SOLO_CRYPTO_URL = 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest';
const options = {
  'X-CMC_PRO_API_KEY': process.env.API_KEY
};


module.exports = {
  fetchTop100,
  fetchCryptoData
};

async function fetchTop100(req, res) {
  const apiResponse = await axios.get(CMC_TOP_100_URL, {headers: options});
  res.json(apiResponse.data.data);
}

async function fetchCryptoData(req, res) {
  const apiResponse = await axios.get(`${CMC_SOLO_CRYPTO_URL}?id=${req.params.id}`, {headers: options});
  res.json(apiResponse.data.data[req.params.id]);
}