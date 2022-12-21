import sendRequest from "./send-request";

const BASE_URL = "/api/orders";

export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
  }

export function addItemToCart(itemId) {
  console.log(itemId)
    return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
  }

export function deleteItemFromCart(itemId) {
  return sendRequest(`${BASE_URL}/delete/${itemId}`, 'DELETE');
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}
export function getAllForUser() {
  return sendRequest(`${BASE_URL}`);
}