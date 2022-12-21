import * as ordersAPI from '../../utilities/orders-api';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

export default function Cart({ cart, setCart }) {
  const navigate = useNavigate();
  const handleDeleteItem = async (item_id) => {
    const updatedCart = await ordersAPI.deleteItemFromCart(item_id);
    setCart(updatedCart);
  }
  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
    setCart(cart);
  }
  

  return (
    <div>
      {cart.lineItems && cart.lineItems.length === 0 ? 
      <h4> <strong> Your cart is empty </strong></h4>
       : (
        cart.lineItems &&
        cart.lineItems.map((item) => (
          <div className='cart-div'>
            
            <img className='img' src={item.item.main_image} alt="" /> 
            {item.item.title} 
           
            {item.item.price}
            <button className='rbtn' onClick={() => handleDeleteItem(item._id)}>Remove</button>
           </div>
          
        ))
      )}
      <div className='total'><h4>Subtotal&nbsp;${cart.orderTotal}</h4>
      <button onClick={handleCheckout}> Checkout </button></div>
    </div>
  );
}