import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/Movie/MovieCard/MovieCard';
import { Link } from 'react-router-dom';

type movie = {
    id: string,
    title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    director: string,
    categories: string,
    ratingStarsCount: number
}

export default function MoviesPage() {

    const movies = useSelector((state: any) => state.movies);

    return (
        <>
            <div className="row">
                <h1>Movies On The Train</h1>
                <Link
                    to="/create"
                    className="btn btn-danger"
                >
                    Create Movie
                </Link>
            </div>
            <div className="container">
                {movies.map((movie: movie) =>
                    <MovieCard
                        movie={movie}
                    />)}
            </div>
        </>
    )
}