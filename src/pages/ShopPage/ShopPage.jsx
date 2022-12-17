import SearchBar from "../../components/Search/Search";
import { useState } from 'react';
import Item from '../../components/Item/Item';

export default function ShopPage() {
  const [data, setData] = useState([]);
  
  
  
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

