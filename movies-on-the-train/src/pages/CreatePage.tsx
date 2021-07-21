import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MovieForm from '../components/Form/MovieForm';

type movie = {
    id: string,
    title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    director: string,
    categories: string,
    ratingStars: number
}

export default function CreatePage() {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleCreate = (createdMovie: movie) => {
        dispatch({
            type: 'CREATE',
            payload: [],
            new: createdMovie
        })

        history.push("/");
    }

    return (
        <>
            <div className="row">
                <h1>Create Movie</h1>
            </div>
            <div className="container">
                <MovieForm
                    handler={handleCreate}
                    titleLabel="Create"
                />
            </div>
        </>
    )
}