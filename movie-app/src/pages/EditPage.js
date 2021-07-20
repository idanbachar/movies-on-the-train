import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/Movie/MovieCard/MovieCard';
import { useParams } from 'react-router';
import Edit from '../components/Movie/Edit/Edit';

export default function EditPage() {

    const params = useParams();
    const movies = useSelector(state => state.movies);
    const [movie, setMovie] = useState(null);

    const getCurrentMovie = () => {

        const current = movies
            .find(movie =>
                movie.id == params.movieId
            );

        return current;
    }

    useEffect(() => {

        const currentMovie = getCurrentMovie();
        setMovie(currentMovie);

    }, [movies])

    return (
        <>
            <h1>Edit</h1>
            <div className="container">
                {movie !== null ?
                    <Edit movie={movie} />
                    : null}
            </div>
        </>
    )
}