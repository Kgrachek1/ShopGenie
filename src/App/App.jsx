import './App.css';
import { Routes, Route } from 'react-router-dom';
import {  user } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage.Jsx';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import Item from '../Item/Item';



export default function App() {
  return (
    <main className="App">
      { user ? 
        <>
         <NavBar />
         <SearchItem />
         <Routes>
         {/* Route Components in here*/}
          <Route path="/orders/new" element ={<NewOrderPage/>} />
          <Route path="/orders" element={<OrderHistoryPage />} />
         </Routes>
        </>
        
        //<NewOrderPage />
      :
        <AuthPage />
      }
    </main>
)
  }

