import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCardDetailed from '../components/Movie/MovieCardDetailed/MovieCardDetailed';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function DetailsPage() {

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
            <h1 align="center">Movie Details</h1>
            <div className="row">
                <Link
                    to="/"
                    className="btn btn-danger">
                    Back
                </Link>
            </div>
            <div className="container">
                {movie !== null ?
                    <MovieCardDetailed
                        id={movie.id}
                        title={movie.title}
                        description={movie.overview}
                        image={movie.poster_path}
                        release_date={movie.release_date}
                        ratingStarCount={movie.ratingStars}
                    /> : null}
            </div>
        </>
    )
}