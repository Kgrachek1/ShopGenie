import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ShopPage from '../ShopPage/ShopPage';
import PurchaseHistory from '../PurchaseHistory/PurchaseHistory';
import NavBar from '../../components/NavBar/NavBar';
import Cart from '../Cart/Cart';
import * as ordersAPI from '../../utilities/orders-api.js';
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(null);


  useEffect(function () {
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);


  const handleAddToOrder = async (item_id) => {
    const updatedCart = await ordersAPI.addItemToCart(item_id);
    setCart(updatedCart);
    console.log(updatedCart)
  }
  
  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            
            <Routes>
              {/* Route components in here */}
              <Route path="/shop" element={<ShopPage data={data} setData={setData}
              handleAddToOrder={handleAddToOrder} />} />
              <Route path="/purchases" element={<PurchaseHistory />} />
              <Route path="/cart" element={<Cart cart={cart} />} />
              <Route path="/" element={<ShopPage setData={setData} handleAddToOrder={handleAddToOrder} data={data}/>} />   
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
  
