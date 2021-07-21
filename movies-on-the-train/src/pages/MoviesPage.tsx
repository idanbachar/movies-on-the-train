import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/Movie/MovieCard/MovieCard';
import { Link } from 'react-router-dom';

type movie = {
    id: string,
    title: string,
    poster_path: string,
    ratingStars: number,
    director: string,
    categories: string,
    overview: string,
    release_date: string
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
                {movies.map((movie: movie) => {
                    return (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            description={movie.overview}
                            image={movie.poster_path}
                            release_date={movie.release_date}
                            ratingStarCount={movie.ratingStars}
                            isRatingEnabled={false}
                        />
                    )
                })}
            </div>
        </>
    )
}