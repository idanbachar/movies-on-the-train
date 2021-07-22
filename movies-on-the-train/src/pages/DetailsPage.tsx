import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCardDetailed from '../components/Movie/MovieCardDetailed/MovieCardDetailed';
import { useParams } from 'react-router';
import { Movie } from '../components/Movie/Movie';

export default function DetailsPage() {

    const OMDB_API_KEY = "1b7c2d93";
    const dispatch = useDispatch();
    const params = useParams<{ movieId?: string }>();
    const movies = useSelector((state: any) => state.movies);
    const defaultMovieValues = { id: "", title: "", overview: "", poster_path: "", release_date: "", director: "", categories: "", ratingStarsCount: 0, isFavourite: false }

    const [movie, setMovie] = useState<Movie>(defaultMovieValues);

    const getCurrentMovie = async () => {
        // get current movie data from redux:
        const current = movies.find((movie: Movie) =>
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