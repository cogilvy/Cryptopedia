import { sendRequest } from './send-request';

const BASE_URL = '/api/cryptos';

export async function fetchTop100Cryptos() {
  return sendRequest(`${BASE_URL}/top100`);
}

