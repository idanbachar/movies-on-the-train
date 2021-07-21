import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/Movie/MovieCard/MovieCard';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function MoviesPage() {

    const movies = useSelector(state => state.movies);

    return (
        <>
            <h1 align="center">Movies On The Train</h1>
            <div className="row">
                <Link
                    to="/create"
                    className="btn btn-danger"
                >
                    Create Movie
                </Link>
            </div>
            <div className="container">
                {movies.map(movie => {
                    return (
                        <MovieCard
                            id={movie.id}
                            title={movie.title}
                            description={movie.overview}
                            image={movie.poster_path}
                            release_date={movie.release_date}
                        />
                    )
                })}
            </div>
        </>
    )
}