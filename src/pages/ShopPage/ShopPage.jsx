import React, { useState } from 'react';


export default function DataFetching() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  async function fetchDataHandler() {
    let response = await fetch(`https://api.bluecartapi.com/request?api_key=42E114313B1D4FEB8F610152EA003066&search_term=${search}&type=search`
      );
    let resolved = await response.json();
    setData(resolved.search_results);
    console.log(resolved);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchDataHandler()
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      {/* <button onClick={fetchDataHandler}>get data</button> */}
      
      <div>
        {data.length === 0
          ? 'loading'
          : data.map((item) => <div> <Item item={item}/> </div>)}
      </div>
    </>
  );
} 