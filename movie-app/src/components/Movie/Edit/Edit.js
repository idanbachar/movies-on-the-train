import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Edit({ movie }) {


    const [title, setTitle] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="detailed-card">
            <div className="card-body">
                Title: <input type="text" />
            </div>
        </div>
    )
}