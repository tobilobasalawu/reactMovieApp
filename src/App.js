import React from 'react'
import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg'

//Api key: c99e8c72

const apiUrl = "https://www.omdbapi.com/?apikey=c99e8c72";

const movie1 = {
  "Title": "My Hero Academia Abridged",
  "Year": "2016–",
  "imdbID": "tt7836396",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZGQxMzNhNmQtNzcyZS00M2UyLWI1ZDktMzI4ZjM4OTM4MWFlXkEyXkFqcGdeQXVyMTYwNTk5MDk@._V1_SX300.jpg"
}

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
        <input placeholder='Search Movies' 
        value= "SUPERMAN"
        onChange={() => {}}/>
      <img 
        src={SearchIcon}
        alt='Search Icon'
        onClick={() => {}}
      />
      </div>

      <div className='container'>
        <div className='movie'>
          <div>
            <p>{movie1.Year}</p>
          </div>

        <div>
          <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
        </div>

        <div>
          <span>{movie1.Type}</span>
          <h3>{movie1.Title}</h3>
        </div>

        </div>
      </div>
    </div>
  );
}

export default App