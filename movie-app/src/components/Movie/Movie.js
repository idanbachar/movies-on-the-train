import React from 'react';
import './Movie.css'


export default function Movie({title, image, year}) {

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <img
                        src={image}
                        alt={title}
                    />
                </div>
                <div className="card-body">
                    <h4>{title}</h4>
                    <p>{title}</p>
                    <hr />
                    <div className="user">
                        <img
                            src="https://gitlab.com/uploads/-/system/user/avatar/2167598/avatar.png?width=400"
                            alt="user"
                        />
                        <div className="user-info">
                            <h5>Idan Bachar</h5>
                            Release date: {year}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}