import './App.css';
import { useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage.Jsx';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';



function MyComponent() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=50"
      );
      const data = await response.json();
      console.log(response);
      setData(data);
    }

    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  if (!data) {
    return <p>Loading..</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {data.map((item) => (
          <div
            className="image"
            style={{
              background: `url(${item.image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat"
            }}
          >
            ${item.price}
          </div>
        ))}
      </ul>
    </>
  );
}


export default function App() {
  return (
    <main className="App">
      {  
        <>
         <NavBar />
         <MyComponent />
         <Routes>
         {/* Route Components in here*/}
          <Route path="/orders/new" element ={<NewOrderPage/>} />
          <Route path="/orders" element={<OrderHistoryPage />} />
         </Routes>
        </>
        
        //<NewOrderPage />
      }:
        <AuthPage />
    {'}'}
    </main>
)
  }

