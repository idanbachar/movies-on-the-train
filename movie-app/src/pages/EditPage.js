import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Edit from '../components/Movie/Edit/Edit';
import { useHistory } from 'react-router-dom';

export default function EditPage() {

    const dispatch = useDispatch();
    const params = useParams();
    const movies = useSelector(state => state.movies);
    const [movie, setMovie] = useState(null);
    const history = useHistory();

    const getCurrentMovie = () => {

        const current = movies
            .find(movie =>
                movie.id == params.movieId
            );

        return current;
    }

    const handleEdit = (editedMovie) => {
        dispatch({
            type: 'EDIT',
            payload: editedMovie
        })

        history.push(`/details/${editedMovie.id}`);
    }

    useEffect(() => {

        const currentMovie = getCurrentMovie();
        setMovie(currentMovie);

    }, [movies])

    return (
        <>
            <h1 align="center">Edit Movie</h1>
            <div className="container">
                {movie !== null ?
                    <Edit
                        id={movie.id}
                        title={movie.title}
                        description={movie.overview}
                        image={movie.poster_path}
                        release_date={movie.release_date}
                        handleEdit={handleEdit}
                    />
                    : null}
            </div>
        </>
    )
}