import React from 'react';
import { Link } from "react-router-dom";
import './MovieCardDetailed.css'

export default function MovieCardDetailed({ id, title, description, image, release_date }) {
    return (
        <div className="detailed-card">
            <div className="card-body">
                <img

                    src={image}
                    alt="rover" />
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="user">
                    <div className="card-info">
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