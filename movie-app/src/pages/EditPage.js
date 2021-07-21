import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import MovieForm from '../components/Form/MovieForm';

export default function EditPage() {

    const dispatch = useDispatch();
    const params = useParams();
    const movies = useSelector(state => state.movies);
    const [movie, setMovie] = useState();
    const history = useHistory();

    const getCurrentMovie = () => {

        const current = movies
            .find(movie =>
                movie.id == params.movieId
            );

        setMovie(current);
    }

    const handleEdit = (editedMovie) => {
        dispatch({
            type: 'EDIT',
            payload: editedMovie
        })

        history.push(`/details/${editedMovie.id}`);
    }

    useEffect(() => {

        getCurrentMovie();

    }, [movies])

    return (
        <>
            <h1 align="center">Edit Movie</h1>
            <div className="container">
                {movie !== undefined ?
                    <MovieForm
                        handler={handleEdit}
                        titleLabel="Edit"
                        movie={movie}
                    />
                    : null}
            </div>
        </>
    )
}