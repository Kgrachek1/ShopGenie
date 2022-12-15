import './App.css';
import { useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage.Jsx';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import Cart from './pages/Cart/Cart';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ? 
        <>
         <NavBar />
         <Routes>
         {/* Route Components in here*/}
          <Route path="/shop/new" element ={<NewOrderPage />} />
          <Route path="/purchases" element={<OrderHistoryPage />} />
          <Route path="/cart" element={<Cart />} />
         </Routes>
        </>
        
        //<NewOrderPage />
        :
        <AuthPage />
    }
    </main>
);
  }

