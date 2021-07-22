import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import MoviesPage from './pages/MoviesPage';
import DetailsPage from './pages/DetailsPage';
import EditPage from './pages/EditPage';
import './App.css';
import CreatePage from './pages/CreatePage';

export default function App() {

  const THE_MOVIE_DB_API = "c1dc0c4c242380dce80741f82a86c998";
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${THE_MOVIE_DB_API}`);
    const data = await res.json();
    let results = data.results;

    dispatch({
      type: "INIT",
      payload: results
    })
  }

  useEffect(() => {

    if (sessionStorage.getItem("movies") === null)
      fetchMovies();
    else {
      dispatch({
        type: "GET_FROM_SESSION"
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