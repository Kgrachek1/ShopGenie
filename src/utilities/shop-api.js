import sendRequest from "./send-request";


const BASE_URL = '/api/shop';


export  function shopSearch(search) {
  return sendRequest(`${BASE_URL}/search?q=${search}`)
}

 export function getCartItems(id) {
   return sendRequest(`${BASE_URL}/cart/items/${id}`);
}

