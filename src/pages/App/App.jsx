import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../ShopPage/ShopPage';
import OrderHistoryPage from '../PurchaseHistory/PurchaseHistory';
import NavBar from '../../components/NavBar/NavBar';
import Cart from '../Cart/Cart';



export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
          
            <Routes>
              {/* Route components in here */}
              <Route path="/shop/new" element={<NewOrderPage />} />
              <Route path="/purchases" element={<OrderHistoryPage />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
