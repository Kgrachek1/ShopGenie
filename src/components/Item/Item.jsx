import './Item.css';
import { useParams } from 'react-router-dom';

export default function Item({data, handleAddToOrder, item}) {
  // const { itemId } = useParams();
  // let item = data.find((item) => item.product.item_id === itemId)

  return (
    <div className="item">
      <div className="item-image">
      <img src={item.product.main_image} alt={item.product.title} />
      </div>
      <div className="item-details">
        <div className="item-title">{item.product.title}</div>
        <div className="item-price">${item.offers.primary.price}</div>
        <div className="item-add">
          <button onClick={() => handleAddToOrder(item.product.item_id)}>Add to cart</button>
      <hr/>
        </div>
      </div>
    </div>
  );
}



