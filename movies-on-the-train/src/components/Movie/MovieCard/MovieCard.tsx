import React from 'react';
import { Link } from "react-router-dom";
import RatingStars from '../RatingStars/RatingStars';
import './MovieCard.css'

type props = {
    id: string,
    title: string,
    description: string,
    image: string,
    release_date: string,
    ratingStarCount: number,
    isRatingEnabled: boolean
}

export default function MovieCard({ id, title, description, image, release_date, ratingStarCount, isRatingEnabled }: props) {

    const handleVote = (number : number) =>{

        console.log(number);
    }

    return (
        <div className="card">
            <Link to={`/details/${id}`}>
                <div className="card-header">
                    <img src={image} alt="rover" />
                </div>
                <div className="card-body">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <RatingStars
                        count={ratingStarCount}
                        isRatingEnabled={isRatingEnabled}
                        handleVote={() => handleVote}
                    />
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