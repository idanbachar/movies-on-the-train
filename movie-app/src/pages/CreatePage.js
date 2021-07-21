import React from 'react';
import { useDispatch } from 'react-redux';
import Create from '../components/Movie/Create/Create';

export default function CreatePage() {

    const dispatch = useDispatch();

    const handleCreate = (editedMovie) => {
        dispatch({
            type: 'CREATE',
            payload: editedMovie
        })
    }

    return (
        <>
            <h1 align="center">Create Movie</h1>
            <div className="container">
                <Create handleCreate={handleCreate} />
            </div>
        </>
    )
}