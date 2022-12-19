import './Item.css';
import React, { useState } from 'react';


export default function Item({ item, handleAddToCart }) {
  const [items, setItems] = useState([]);

  const handleAddToCart = async (item) => {
    console.log(item);
    const existingItem = items.find((i) => i.id === item.id);
    if (existingItem) {
      setItems(
        items.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
      );
    } else {
      setItems([...items, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="item">
      <div className="item-image">
        <img src={item.product.main_image} alt={item.product.title} />
      </div>
      <div className="item-details">
        <div className="item-title">{item.product.title}</div>
        <div className="item-price">${item.offers.primary.price}</div>
        <div className="item-add">
          <button onClick={() => handleAddToCart(item)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}



