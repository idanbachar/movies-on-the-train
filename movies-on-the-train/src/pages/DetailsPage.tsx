import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCardDetailed from '../components/Movie/MovieCardDetailed/MovieCardDetailed';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

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

export default function DetailsPage() {

    const OMDB_API_KEY = "1b7c2d93";
    const dispatch = useDispatch();
    const params = useParams<{ movieId?: string }>();
    const movies = useSelector((state: any) => state.movies);
    const defaultMovieValues = { id: "", title: "", overview: "", poster_path: "", release_date: "", director: "", categories: "", ratingStarsCount: 0 }

    const [movie, setMovie] = useState<movie>(defaultMovieValues);

    const getCurrentMovie = async () => {
        // get current movie data from redux:
        const current = movies.find((movie: movie) =>
            movie.id == params.movieId);

        // get missing data (director, categories) from other omdb api:
        if (current !== undefined) {
            if (current.director === "" && current.categories === "") {
                const res = await fetch(`https://www.omdbapi.com/?t=${current.title}&apikey=${OMDB_API_KEY}`);
                const data = await res.json();

                current.director = data.Director;
                current.categories = data.Genre;

                // update current movie with director, genre:
                dispatch({
                    type: 'EDIT',
                    payload: [],
                    new: current
                })
            }
            setMovie(current);
        }
    }

    useEffect(() => {
        getCurrentMovie();
    }, [movies, movie])

    return (
        <>
            <div className="row">
                <h1>Movie Details</h1>
                <Link
                    className="btn btn-danger"
                    to="/"
                >
                    Back
                </Link>
            </div>
            <div className="container">
                {movie.id !== "" ?
                    <MovieCardDetailed
                        movie={movie}
                    />
                    : null}
            </div>
        </>
    )
}