import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import MoviesPage from './pages/MoviesPage';
import './App.css';
import { useDispatch } from 'react-redux';

export default function App() {

  const dispatch = useDispatch();

  const getMovies = async () => {

    const res = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=c1dc0c4c242380dce80741f82a86c998&language=en-US&page=1")
    const data = await res.json();
    dispatch({
      type: "INIT",
      payload: data.results
    })
  }

  useEffect(() => {
    getMovies();

  }, [])

  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route
            path="/Movies"
            component={MoviesPage}
            exact />
        </Switch>
      </BrowserRouter>

    </div>
  );
}