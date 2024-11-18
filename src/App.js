import React from 'react'
import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg'

//Api key: c99e8c72

const apiUrl = "https://www.omdbapi.com/?apikey=c99e8c72";

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch((`${apiUrl}&s=${title}`)); //calling Api
    const data = await response.json();

    console.log(data.Search);
  };
    

  useEffect(() => {
    searchMovies("MY HERO ACADEMIA");
  }, []);

  return(
    <div className='app'>
      <h1>StreamBase</h1>

      <div className='search'>
        <input placeholder='Search Movies' />
      </div>
    </div>
  );
}

export default App