import { Link } from "react-router-dom";
import { Movie } from '../Movie';
import RatingStars from '../RatingStars/RatingStars';
import Card from 'react-bootstrap/Card'


type props = { movie: Movie }

export default function MovieCard({ movie }: props) {

    const handleVote = (number: number) => { }

    return (
        <Link to={`/details/${movie.id}`}>
            <Card>
                <Card.Img variant="top" src={movie.poster_path} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.overview.substring(0, 100)}...</Card.Text>
                    <Card.Text>
                        <RatingStars
                            count={movie.ratingStarsCount}
                            handleVote={() => handleVote}
                        />
                    </Card.Text>
                    <Card.Footer>
                        Release date: {movie.release_date}
                    </Card.Footer>
                </Card.Body>
            </Card>
        </Link>
    )
}