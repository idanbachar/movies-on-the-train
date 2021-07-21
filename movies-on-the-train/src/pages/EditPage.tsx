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
    ratingStars: number
}

export default function EditPage() {


    const defaultMovieValues = {
        id: "0",
        title: "",
        overview: "",
        poster_path: "",
        release_date: "",
        director: "",
        categories: "",
        ratingStars: 0,
        isRatingEnabled: false
    }

    const dispatch = useDispatch();
    const params = useParams<{ movieId?: string }>();
    const movies = useSelector((state: any) => state.movies);
    const [movie, setMovie] = useState<movie>(defaultMovieValues);
    const history = useHistory();


    const getCurrentMovie = () => {

        const current = movies
            .find((movie: movie) =>
                movie.id == params.movieId
            );

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

    }, [movie, movies])

    return (
        <>
            <div className="row">
                <h1>Edit Movie</h1>
            </div>
            <div className="container">
                {movie.id !== "0" ?
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