import React, { useEffect, useState } from 'react';
import Movie from './components/Movie/Movie';
import './App.css';

export default function App() {


  const [movies, setMovies] = useState([]);

  const getMovies = async () => {

    const res = await fetch("https://imdb-api.com/en/API/MostPopularMovies/k_tk4f45sh")
    const data = await res.json();
    setMovies(data.items);

  }

  useEffect(() => {

    getMovies();


  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {movies.map(movie =>
          <Movie
            title={movie.title}
            
          />)}
      </header>
    </div>
  );
}