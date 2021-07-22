import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
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
    ratingStarsCount: number
}

export default function EditPage() {

    const dispatch = useDispatch();
    const params = useParams<{ movieId?: string }>();
    const history = useHistory();
    const movies = useSelector((state: any) => state.movies);
    const defaultMovieValues = { id: "", title: "", overview: "", poster_path: "", release_date: "", director: "", categories: "", ratingStarsCount: 0 }

    const [movie, setMovie] = useState<movie>(defaultMovieValues);

    const getCurrentMovie = () => {

        const current = movies.find((movie: movie) =>
            movie.id == params.movieId);

        if (current !== undefined)
            setMovie(current);
    }

    const handleEdit = (editedMovie: movie) => {
        dispatch({
            type: 'EDIT',
            payload: [],
            new: editedMovie
        })

        history.push(`/details/${editedMovie.id}`);
    }

    useEffect(() => {
        getCurrentMovie();
    }, [movies, movie])

    return (
        <>
            <div className="row">
                <h1>Edit Movie</h1>
            </div>
            <div className="container">
                {movie.id !== "" ?
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