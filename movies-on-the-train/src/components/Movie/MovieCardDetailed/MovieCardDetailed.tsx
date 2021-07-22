import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Movie } from '../Movie';
import RatingStars from '../RatingStars/RatingStars';
import Card from 'react-bootstrap/Card'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'

type props = { movie: Movie }

export default function MovieCardDetailed({ movie }: props) {

    const dispatch = useDispatch();
    // Modal:
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    type props = { isFavourite: boolean }

    function FavouriteButton({ isFavourite }: props) {
        return (
            <button
                className={"btn btn-" + (isFavourite ? "danger" : "success")}
                onClick={() => handleFavourite(!isFavourite)}
            >
                {isFavourite ? "Remove Favourites" : "Add Favourites"}
            </button>
        )
    }

    function updateMovieData(updatedMovie: Movie) {
        dispatch({
            type: 'EDIT',
            payload: [],
            new: updatedMovie
        })
    }

    function handleVote(ratingStars?: number) {
        movie.ratingStarsCount = ratingStars || 0;
        updateMovieData(movie);
    }

    function handleFavourite(isFavourite: boolean) {
        movie.isFavourite = isFavourite;
        updateMovieData(movie);
    }

    return (
        <>
            <Card>
                <Card.Img variant="top" src={movie.poster_path} style={{ width: '300px' }} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.overview}</Card.Text>
                    <Card.Text>
                        Categories: <b>{movie.categories}</b>
                    </Card.Text>
                    <Card.Text>
                        Director: {movie.director}
                    </Card.Text>
                    <Card.Text>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <FavouriteButton
                                            isFavourite={movie.isFavourite}
                                        />
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={handleShowModal}
                                        >
                                            Watch Trailer
                                        </button>
                                    </td>
                                    <td>
                                        <Link
                                            className="btn btn-primary"
                                            to={`/edit/${movie.id}`}
                                        >
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Card.Text>
                    <Card.Text>
                        <h6>Press the stars to rate!</h6>
                        <RatingStars
                            count={movie.ratingStarsCount}
                            handleVote={handleVote}
                        />
                    </Card.Text>
                    <Card.Footer>
                        Release date: {movie.release_date}
                    </Card.Footer>
                </Card.Body>
            </Card>

            <Modal
                show={showModal}
                onHide={handleCloseModal}
                keyboard={false}
            >
                <Modal.Header style={{ backgroundColor: '#000', color: '#fff' }}>
                    <Modal.Title>{movie.title} Trailer</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#000' }}>
                    <iframe
                        width="460"
                        height="315"
                        src={`https://www.youtube.com/embed/${movie.trailerKey}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                </Modal.Body>
            </Modal>
        </>
    )
}