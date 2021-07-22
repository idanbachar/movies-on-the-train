import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import MovieForm from '../components/Form/MovieForm';
import { Movie } from '../components/Movie/Movie';

export default function EditPage() {

    const dispatch = useDispatch();
    const params = useParams<{ movieId?: string }>();
    const history = useHistory();
    const movies = useSelector((state: any) => state.movies);
    const defaultMovieValues = { id: "", title: "", overview: "", poster_path: "", release_date: "", director: "", categories: "", ratingStarsCount: 0, isFavourite: false}

    const [movie, setMovie] = useState<Movie>(defaultMovieValues);

    const getCurrentMovie = () => {

        const current = movies.find((movie: Movie) =>
            movie.id == params.movieId);

        if (current !== undefined)
            setMovie(current);
    }

    const handleEdit = (editedMovie: Movie) => {
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