import React, { useState } from 'react';

  
const ShoppingCart = () => {
  const [items, setItems] = useState([]);


  const removeFromCart = (itemId) => {
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
      {items.map(item => (
        <div key={item.id}>
          {item.name} - {item.quantity} x {item.price}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <div>Total: {totalPrice}</div>
    </div>
  );
};

  

export default ShoppingCart;
