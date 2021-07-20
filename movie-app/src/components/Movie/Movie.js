import React from 'react';
import './Movie.css'

export default function Movie({ title, description, image, release_date }) {
    return (
        <div className="card">
            <div className="card-header">
                <img src={image} alt="rover" />
            </div>
            <div className="card-body">
                <h4>{title}</h4>
                <p>{description}</p>
                <div className="user">
                    <div className="card-info">
                        <small>Release date: {release_date}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}