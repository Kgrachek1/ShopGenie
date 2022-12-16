import SearchBar from "../../components/Search/Search";
import { useState } from 'react';
import Item from '../../components/Item/Item';

export default function ShopPage() {
  const [data, setData] = useState([]);
  
  // const addToCart = (item) => {
  //   const existingItem = data.find(i => i.id === item.id);
  //   if (existingItem) {
  //     setData(data.map(i => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)));
  //   } else {
  //     setData([...data, { ...item, quantity: 1 }]);
  //   }
  // }
  
  return (
    <div>
      <SearchBar setData={setData}/>
      {data.map(item => (
        <div key={item.id}>
          <Item item={item}/>
        </div>
      ))}
    </div>
  );
}

