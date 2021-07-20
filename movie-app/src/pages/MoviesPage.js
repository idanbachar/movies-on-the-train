import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Movie from '../components/Movie/Movie';

export default function MoviesPage() {

    const movies = useSelector(state => state.Movies);

    return (
        <>
            {movies.map(movie => {
                return (
                    <Movie
                        title={movie.title}
                        image={movie.image}
                        year={movie.year}
                    />
                )
            })}
        </>
    )
}