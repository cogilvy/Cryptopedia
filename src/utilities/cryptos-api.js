import { sendRequest } from './send-request';

const BASE_URL = '/api/cryptos';

export async function fetchTop100Cryptos() {
  return sendRequest(`${BASE_URL}/top100`);
}

export async function fetchCryptoData(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function fetchCryptoNews(crypto) {
  return sendRequest(`${BASE_URL}/news/${crypto}`);
}






export function formatNumbers(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}