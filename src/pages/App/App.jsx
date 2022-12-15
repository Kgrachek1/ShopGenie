import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ShopPage from '../ShopPage/ShopPage';
import PurchaseHistory from '../PurchaseHistory/PurchaseHistory';
import NavBar from '../../components/NavBar/NavBar';
import Cart from '../Cart/Cart';
//import Item from '../../components/Item/Item';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            
            <Routes>
              {/* Route components in here */}
              <Route path="/shop/new" element={<ShopPage />} />
              <Route path="/purchases" element={<PurchaseHistory />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
