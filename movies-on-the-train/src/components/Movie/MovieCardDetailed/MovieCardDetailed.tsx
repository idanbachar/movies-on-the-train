import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Movie } from '../Movie';
import RatingStars from '../RatingStars/RatingStars';
import './MovieCardDetailed.css'

type props = { movie: Movie }

export default function MovieCardDetailed({ movie }: props) {

    const dispatch = useDispatch();

    function handleVote(ratingStars?: number) {
        const updated = {
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            director: movie.director,
            categories: movie.categories,
            ratingStarsCount: ratingStars
        }

        dispatch({
            type: 'EDIT',
            payload: [],
            new: updated
        })
    }

    return (
        <div className="detailed-card">
            <div className="card-body">
                <img
                    src={movie.poster_path}
                    alt="rover"
                    width="230px"
                />
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p>Categories: <b>{movie.categories}</b></p>
                <p>Director: {movie.director}</p>
                <div className="user">
                    <div className="card-info">
                        <h6>Press the stars to rate!</h6>
                        <RatingStars
                            count={movie.ratingStarsCount}
                            handleVote={handleVote}
                        />
                        <small>Release date: {movie.release_date}</small>
                        <Link
                            className="btn btn-primary"
                            to={`/edit/${movie.id}`}
                        >
                            Edit
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}