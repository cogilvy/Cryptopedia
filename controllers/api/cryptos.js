const axios = require('axios');

const CMC_TOP_100_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const CMC_SOLO_CRYPTO_URL = 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest';
const options = {
  'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY
};


module.exports = {
  fetchTop100,
  fetchCryptoData,
  fetchCryptoNews
};

async function fetchTop100(req, res) {
  const apiResponse = await axios.get(CMC_TOP_100_URL, {headers: options});
  res.json(apiResponse.data.data);
}

async function fetchCryptoData(req, res) {
  const apiResponse = await axios.get(`${CMC_SOLO_CRYPTO_URL}?id=${req.params.id}`, {headers: options});
  res.json(apiResponse.data.data[req.params.id]);
}

async function fetchCryptoNews(req, res) {
  const NEWS_API_URL = `https://newsapi.org/v2/everything?q=${req.params.crypto}&pageSize=6&sortBy=publishedAt&language=en`;
  const apiResponse = await axios.get(NEWS_API_URL, {headers: {'X-Api-Key': process.env.NEWS_API_KEY}});
  res.json(apiResponse.data.articles);
}