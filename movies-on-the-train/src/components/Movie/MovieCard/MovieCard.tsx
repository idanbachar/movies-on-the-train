import { Link } from "react-router-dom";
import { Movie } from '../Movie';
import RatingStars from '../RatingStars/RatingStars';
import './MovieCard.css'

type props = { movie: Movie }

export default function MovieCard({ movie }: props) {

    const handleVote = (number: number) => { }

    return (
        <div className="card">
            <Link to={`/details/${movie.id}`}>
                <div className="card-header">
                    <img
                        src={movie.poster_path}
                        alt="rover"
                    />
                </div>
                <div className="card-body">
                    <h4>{movie.title}</h4>
                    <p>{movie.overview}</p>
                    <RatingStars
                        count={movie.ratingStarsCount}
                        handleVote={() => handleVote}
                    />
                    <div className="user">
                        <div className="card-info">
                            <small>Release date: {movie.release_date}</small>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}