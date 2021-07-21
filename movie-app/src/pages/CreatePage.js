import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MovieForm from '../components/Form/MovieForm';

export default function CreatePage() {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleCreate = (createdMovie) => {
        dispatch({
            type: 'CREATE',
            payload: createdMovie
        })

        history.push("/");
    }

    return (
        <>
            <h1 align="center">Create Movie</h1>
            <div className="container">
                <MovieForm
                    handler={handleCreate}
                    titleLabel="Create"
                />
            </div>
        </>
    )
}