import SearchBar from "../../components/Search/Search";
import Item from '../../components/Item/Item';

export default function ShopPage({handleAddToOrder, data, setData}) {
 
  
  return (
    <div>
      <SearchBar setData={setData}/>
      {data.map(item => (
        <div key={item.id}>
          <Item data={data} item={item} handleAddToOrder={handleAddToOrder} />
        </div>
      ))}
    </div>
  );
}

