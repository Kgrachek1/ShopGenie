import sendRequest from "./send-request";


const BASE_URL = '/api/shop';


export  function shopSearch(search) {
  return sendRequest(`${BASE_URL}/search?q=${search}`)
}

export function addToCart(item_id) {
  return sendRequest(`${BASE_URL}/cart/${item_id}`, 'POST');
}

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}