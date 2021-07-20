import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';

export default function Edit(movie) {

    const [id, setId] = useState(movie.id);
    const [title, setTitle] = useState(movie.title);
    const [description, setDescription] = useState(movie.description);
    const [image, setImage] = useState(movie.image);
    const [release_date, setReleaseDate] = useState(new Date(movie.release_date));

    return (
        <div className="detailed-card">
            <div className="card-body">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter movie title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                            Select good name for movie, to make people watch.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            as="textarea"
                            placeholder="Enter movie description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image (from URL)</Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Enter movie cover image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <br />
                        <Form.Text className="text-muted">
                            Preview image:
                        </Form.Text>
                        <br />
                        <img
                            src={image}
                            alt={title}
                            width={150}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Movie Release Date</Form.Label>
                        <br />
                        <DatePicker selected={release_date} onChange={(date) => setReleaseDate(date)} />
                    </Form.Group>
                    <Button variant="primary" onClick={() => movie.handleEdit({
                        id,
                        title,
                        description,
                        image,
                        release_date
                    })}>
                        Edit!
                    </Button>

                    <Link
                        className="btn btn-danger"
                        to={`/details/${id}`}>
                        Cancel
                    </Link>
                </Form>
            </div>
        </div>
    )
}