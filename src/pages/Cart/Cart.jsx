import React, { useState } from 'react';

const Cart = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevState) => [...prevState, item]);
  }

  const removeItem = (item) => {
    setItems((prevState) => prevState.filter((i) => i !== item));
  }

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <button onClick={() => addItem({ id: 1, name: 'item1', price: 10 })}>
        Add Item
      </button>
      <button onClick={() => removeItem({ id: 1, name: 'item1', price: 10 })}>
        Remove Item
      </button>
    </div>
  );
}

export default Cart;
