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
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}