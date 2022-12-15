import { useState } from "react";
import * as shopApi from '../../utilities/shop-api'
import {useNavigate} from 'react-router-dom'
import './Search.css'
export default function SearchBar({setData}) {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();


  async function fetchDataHandler() {
    let searchResult = await shopApi.shopSearch(search)
    if (searchResult) {
      navigate('/shop/new')
    }
    setData(searchResult.search_results) 
    console.log(searchResult.search_results);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchDataHandler();
    setSearch('')
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input className='inputex' type="text"
          placeholder='Search...'
          value={search}
          onChange={(event) => setSearch(event.target.value)} />
        <button type="submit"></button>
      </form>
    </div>
  );
}