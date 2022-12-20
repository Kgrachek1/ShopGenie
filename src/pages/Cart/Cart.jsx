import * as ordersAPI from '../../utilities/orders-api';

export default function Cart({ cart, setCart, lineItems }) {
 
  const handleDeleteItem = async (item_id) => {
    const updatedCart = await ordersAPI.deleteItemFromCart(item_id);
    setCart(updatedCart);
    console.log(updatedCart)
  }
  // const handleDeleteItems = async (itemToRemove) => {
  //   try {
  //     await fetch(`/api/cart/${itemToRemove._id}`, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
  //       },
  //     });

  //     // Remove the item from the cart state
  //     setCart({
  //       ...cart,
  //       lineItems: cart.lineItems.filter((item) => item._id !== itemToRemove._id),
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const totalCost = Math.round(cart.lineItems.reduce((acc, item) => acc + item.item.price, 0));


  return (
    <div>
      {cart.lineItems && cart.lineItems.length === 0 ? (
        'Your cart is empty'
      ) : (
        cart.lineItems &&
        cart.lineItems.map((item) => (
          <div>
            {item.item.title} 
            &nbsp;
            <img src={item.item.main_image} alt="" /> 
            &nbsp;
            {item.item.price}
            <button onClick={() => handleDeleteItem(lineItems.item._id)}>Remove</button>
          </div>
        ))
      )}
      <div>Total:{totalCost}</div>
    </div>
  );
}