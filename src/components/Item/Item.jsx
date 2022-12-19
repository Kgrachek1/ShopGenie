import './Item.css';
import React, { useState } from 'react';


export default function Item({ item }) {
  const [items, setItems] = useState([]);
  const handleaddToCart = (item) => {
    console.log(item)
    const existingItem = items.find(i => i.id === item.id);
    if (existingItem) {
      setItems(items.map(i => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)));
    } else {
      setItems([...items, { ...item, quantity: 1 }]);
    }
    console.log(handleaddToCart)
  };

  return (
    <div className="item">
      <div className="item-image">
        <img src={item.product
          .main_image} alt={item.product.title} />
      </div>
      <div className="item-details">
        <div className="item-title">{item.product.title}</div>
        <div className="item-price">${item.offers.primary.price}</div>
        <div className="item-add">
        <button onClick={() => handleaddToCart(item)}>Add to cart</button>


        </div>
      </div>
    </div>
  );
}



// export default function Item({ item }) {
//     return (
    
//       <div
//       className="image-div"
//       style={{
//         background: `url(${item.product.main_image})`,
//         backgroundSize: "contain",
//         backgroundRepeat: "no-repeat"
//       }}
//       >
//         <div>
//           <p className='price'>Only &nbsp;${item.offers.primary.price}!</p>
//         </div>
//         <div className='title'>
//         <article>{item.product.title}</article>
//         </div>
        
        
//     </div>

//     );
//   }