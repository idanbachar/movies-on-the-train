import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
    ratingStars: number
}

export default function DetailsPage() {

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

    const params = useParams<{ movieId?: string }>();
    const movies = useSelector((state: any) => state.movies);
    const [movie, setMovie] = useState(defaultMovieValues);

    const OMDB_API_KEY = "1b7c2d93";

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
            }

            setMovie(current);
        }
    }

    useEffect(() => {

        getCurrentMovie();

    }, [movies])

    return (
        <>
            <div className="row">
                <h1>Movie Details</h1>
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