import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MoviesPage from './pages/MoviesPage';
import './App.css';
import { useDispatch } from 'react-redux';

export default function App() {

  const dispatch = useDispatch();

  const getMovies = async () => {

    const res = await fetch("https://imdb-api.com/en/API/MostPopularMovies/k_tk4f45sh")
    const data = await res.json();
    dispatch({
      type: "INIT",
      payload: data.items
    })
  }

  useEffect(() => {
    getMovies();

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/Movies">Movies</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/Movies">
                <MoviesPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}