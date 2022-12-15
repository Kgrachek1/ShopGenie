import './App.css';
import { useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage.Jsx';
import ShopPage from '../ShopPage/ShopPage';
import PurchaseHistory from '../PurchaseHistory';
import NavBar from '../../components/NavBar/NavBar';
import Cart from './pages/Cart/Cart';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ?
          <>
            <NavBar user={user} setUser={setUser} />
         <Routes>
         {/* Route Components in here*/}
          <Route path="/shop/new" element ={<ShopPage />} />
          <Route path="/purchases" element={<PurchaseHistory />} />
          <Route path="/cart" element={<Cart />} />
         </Routes>
        </>
        
        //<ShopPage />
        :
        <AuthPage />
    }
    </main>
);
  }

