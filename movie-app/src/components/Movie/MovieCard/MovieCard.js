import React from 'react';
import { Link } from "react-router-dom";
import RatingStars from '../RatingStars/RatingStars';
import './MovieCard.css'

export default function MovieCard({ id, title, description, image, release_date, ratingStarCount }) {

    return (
        <div className="card">
            <Link to={`/details/${id}`}>
                <div className="card-header">
                    <img src={image} alt="rover" />
                </div>
                <div className="card-body">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <RatingStars count={ratingStarCount} />
                    <div className="user">
                        <div className="card-info">
                            <small>Release date: {release_date}</small>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}