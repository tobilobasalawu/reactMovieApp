import React from 'react'
import { useEffect } from 'react';

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
    <div>
      <h1>Movie App</h1>
    </div>
  );
}

export default App