import React, { useState } from 'react';


export default function Cart({ cart, lineItem }) {
  const [items, setItems] = useState([]);
 
  const removeFromCart =  (itemId) => {
    const existingItem = items.find(i => i.id === itemId);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        setItems(items.map(i => (i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i)));
      } else {
        setItems(items.filter(i => i.id !== itemId));
      }
    }
  };

  const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  
  return (
    <div>
      <h2>Cart</h2>
      {lineItem.map(item => (
        <div key={cart.item_id}>
         {item.product.title} - {item.quantity} x {item.offers.primary.price}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
          <div> {item.main_image} </div>
        </div>
      ))}
      <div>Total: {totalPrice}</div>
    </div>
  );
};

  

