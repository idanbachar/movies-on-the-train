import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCardDetailed from '../components/Movie/MovieCardDetailed/MovieCardDetailed';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function DetailsPage() {

    const params = useParams();
    const movies = useSelector(state => state.movies);
    const [movie, setMovie] = useState();

    const OMDB_API_KEY = "1b7c2d93";

    const getCurrentMovie = async () => {

        // get current movie data from redux:
        const current = movies
            .find(movie =>
                movie.id == params.movieId
            );

        // get missing data (director, categories) from other omdb api:
        if (current !== undefined) {

            if (current.director === "" && current.categories === "") {
                const res = await fetch(`https://www.omdbapi.com/?t=${current.title}&apikey=${OMDB_API_KEY}`);
                const data = await res.json();

                current.director = data.Director;
                current.categories = data.Genre;
            }

            setMovie(current);
        }
    }


    useEffect(() => {

        getCurrentMovie();

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
                {movie !== undefined ?
                    <MovieCardDetailed
                        id={movie.id}
                        title={movie.title}
                        description={movie.overview}
                        image={movie.poster_path}
                        release_date={movie.release_date}
                        director={movie.director}
                        categories={movie.categories}
                        ratingStarCount={movie.ratingStars}
                        isRatingEnabled={true}
                    /> : null}
            </div>
        </>
    )
}