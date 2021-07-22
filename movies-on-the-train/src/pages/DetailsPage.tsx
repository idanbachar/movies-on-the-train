import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCardDetailed from '../components/Movie/MovieCardDetailed/MovieCardDetailed';
import { useParams } from 'react-router';
import { Movie } from '../components/Movie/Movie';

export default function DetailsPage() {

    const OMDB_API_KEY = "1b7c2d93";
    const THE_MOVIE_DB_API_KEY = "c1dc0c4c242380dce80741f82a86c998";
    const dispatch = useDispatch();
    const params = useParams<{ movieId?: string }>();
    const movies = useSelector((state: any) => state.movies);
    const defaultMovieValues = { id: "", title: "", overview: "", poster_path: "", release_date: "", director: "", categories: "", ratingStarsCount: 0, isFavourite: false, trailerKey: "" }

    const [movie, setMovie] = useState<Movie>(defaultMovieValues);

    const getCurrentMovie = async () => {
        // get current movie data from redux:
        const current = movies.find((movie: Movie) =>
            movie.id == params.movieId);

        // get missing data (director, categories) from other omdb api:
        if (current !== undefined) {
            if (current.director === "" && current.categories === "" && current.trailerKey === "") {

                // OMDB API:
                const omDbRes = await fetch(`https://www.omdbapi.com/?t=${current.title}&apikey=${OMDB_API_KEY}`);
                const omDbData = await omDbRes.json();
                current.director = omDbData.Director;
                current.categories = omDbData.Genre;

                // The Movie Db API:
                const theMovieDbRes = await fetch(`https://api.themoviedb.org/3/movie/${current.id}/videos?api_key=${THE_MOVIE_DB_API_KEY}`)
                const theMovieDbData = await theMovieDbRes.json();
                current.trailerKey = theMovieDbData.results[0].key;

                // update current movie with director, genre, trailerKey:
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
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>Movie Details</h1>
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