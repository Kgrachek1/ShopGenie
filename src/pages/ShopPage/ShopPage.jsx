import SearchBar from "../../components/Search/Search";
import Item from '../../components/Item/Item';
import './ShopPage.css';

export default function ShopPage({handleAddToOrder, data, setData}) {
 
  
  return (
    <div>
  <div class='light x1'></div>
  <div class='light x2'></div>
  <div class='light x3'></div>
  <div class='light x4'></div>
  <div class='light x5'></div>
  <div class='light x6'></div>
  <div class='light x7'></div>
  <div class='light x8'></div>
  <div class='light x9'></div>

  
      <SearchBar setData={setData}/>
      {data.map(item => (
        <div key={item.id}>
          <Item data={data} item={item} handleAddToOrder={handleAddToOrder} />
        </div>
      ))}
    </div>
  );
}

