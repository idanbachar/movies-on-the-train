import React from 'react';
import { useSelector } from 'react-redux';
import Movie from '../components/Movie/Movie';


export default function MoviesPage() {

    const movies = useSelector(state => state.Movies);

    return (
        <>
        <h1>Movies</h1>
                
            <div className="container">
                {movies.map(movie => {
                    return (
                        <Movie
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