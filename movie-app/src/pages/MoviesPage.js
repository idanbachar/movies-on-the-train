import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/Movie/MovieCard/MovieCard';

export default function MoviesPage() {

    const movies = useSelector(state => state.movies);

    return (
        <>
            <h1>Movies</h1>

            <div className="container">
                {movies.map(movie => {
                    return (
                        <MovieCard
                            id={movie.id}
                            title={movie.title}
                            description={movie.overview}
                            image={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                            release_date={movie.release_date}
                        />
                    )
                })}
            </div>
        </>
    )
}