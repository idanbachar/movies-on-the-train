import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import RatingStars from '../RatingStars/RatingStars';
import './MovieCardDetailed.css'

export default function MovieCardDetailed({ id, title, description, image, release_date, director, categories, ratingStarCount, isRatingEnabled }) {

    const dispatch = useDispatch();

    function handleVote(ratingStars) {
        const updated = {
            id: id,
            title: title,
            overview: description,
            poster_path: image,
            release_date: release_date,
            director: director,
            categories: categories,
            ratingStars: ratingStars
        }

        dispatch({
            type: 'EDIT',
            payload: updated
        })
    }

    return (
        <div className="detailed-card">
            <div className="card-body">
                <img
                    src={image}
                    alt="rover"
                    width="230px"
                />
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Categories: <b>{categories}</b></p>
                <p>Director: {director}</p>
                <div className="user">
                    <div className="card-info">
                        <h6>Press the stars to rate!</h6>
                        <RatingStars
                            count={ratingStarCount}
                            handleVote={handleVote}
                            isRatingEnabled={isRatingEnabled} />
                        <small>Release date: {release_date}</small>
                        <Link
                            to={`/edit/${id}`}
                            className="btn btn-primary">
                            Edit
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}