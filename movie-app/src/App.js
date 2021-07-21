import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import MoviesPage from './pages/MoviesPage';
import DetailsPage from './pages/DetailsPage';
import EditPage from './pages/EditPage';
import './App.css';
import CreatePage from './pages/CreatePage';

export default function App() {

  const MOVIES_API = "https://api.themoviedb.org/3/movie/upcoming?api_key=c1dc0c4c242380dce80741f82a86c998&language=en-US&page=1";
  const dispatch = useDispatch();

  const fetchMovies = async () => {

    const res = await fetch(MOVIES_API);
    const data = await res.json();
    let results = data.results;
    for (let i = 0; i < results.length; i++) {
      const posterPath = results[i].poster_path;
      results[i].poster_path = `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`;
    }

    dispatch({
      type: "INIT",
      payload: data.results
    })
  }

  useEffect(() => {

    if (sessionStorage.key("movies") === null)
      fetchMovies();
    else {
      dispatch({
        type: "GET_SESSION"
      })
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            component={MoviesPage}
            exact />
          <Route
            path="/details/:movieId"
            component={DetailsPage}
            exact />
          <Route
            path="/edit/:movieId"
            component={EditPage}
            exact />
          <Route
            path="/create"
            component={CreatePage}
            exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}