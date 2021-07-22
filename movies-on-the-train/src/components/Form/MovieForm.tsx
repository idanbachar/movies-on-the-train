import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

type movie = {
    id: string,
    title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    director: string,
    categories: string,
    ratingStarsCount: number
}

type props = {
    handler: (arg0: movie) => void,
    titleLabel: string,
    movie?: movie
}

export default function MovieForm({ handler, titleLabel, movie }: props) {

    const [id, setId] = useState(movie === undefined ? uuidv4() : movie.id);
    const [title, setTitle] = useState(movie === undefined ? '' : movie.title);
    const [overview, setOverview] = useState(movie === undefined ? '' : movie.overview);
    const [poster_path, setPosterPath] = useState(movie === undefined ? '' : movie.poster_path);
    const [release_date, setReleaseDate] = useState<Date>(movie === undefined ? new Date() : new Date(movie.release_date));
    const [director, setDirector] = useState(movie === undefined ? '' : movie.director);
    const [categories, setCategories] = useState(movie === undefined ? '' : movie.categories);
    const [ratingStarsCount, setRatingStarsCount] = useState(movie === undefined ? 0 : movie.ratingStarsCount)

    const [validateTitleMessage, setValidateTitleMessage] = useState('');
    const [validatOverviewMessage, setValidateOverviewMessage] = useState('');
    const [validatePosterPathMessage, setValidatePosterPathMessage] = useState('');
    const [validateDirectorMessage, setValidateDirectorMessage] = useState('');
    const [validateCategoriesMessage, setValidateCategoriesMessage] = useState('');

    const validateFields = () => {

        let isTitleValid = false;
        let isOverviewValid = false;
        let isPosterPathValid = false;
        let isCategoriesValid = false;
        let isDirectorValid = false;

        if (title.length < 4) {
            isTitleValid = false;
            setValidateTitleMessage("Title need to contain atleast 4 letters");
        }
        else {
            isTitleValid = true;
            setValidateTitleMessage("");
        }
        if (overview.length < 15) {
            isOverviewValid = false;
            setValidateOverviewMessage("Description need to contain atleast 15 letters");
        }
        else {
            isOverviewValid = true;
            setValidateOverviewMessage("");
        }
        if (poster_path.length < 8) {
            isPosterPathValid = false;
            setValidatePosterPathMessage("image need to contain atleast 8 letters");
        }
        else {
            isPosterPathValid = true;
            setValidatePosterPathMessage("");
        }
        if (director.length < 4) {
            isDirectorValid = false;
            setValidateDirectorMessage("Director need to contain atleast 4 letters");
        }
        else {
            isDirectorValid = true;
            setValidateDirectorMessage("");
        }

        if (categories.length < 4) {
            isCategoriesValid = false;
            setValidateCategoriesMessage("Categories need to contain atleast 4 letters");
        }
        else {
            isCategoriesValid = true;
            setValidateCategoriesMessage("");
        }

        if (isTitleValid &&
            isOverviewValid &&
            isPosterPathValid &&
            isDirectorValid &&
            isCategoriesValid) {
            handler({
                id,
                title,
                overview,
                poster_path,
                release_date: release_date.toISOString().split('T')[0],
                director,
                categories,
                ratingStarsCount,
            })
        }
    };

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
                        <Form.Text className="text-muted" style={{ color: 'red' }}>
                            {validateTitleMessage}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            as="textarea"
                            placeholder="Enter movie description"
                            value={overview}
                            onChange={(e) => setOverview(e.target.value)}
                        />
                        <Form.Text className="text-muted" style={{ color: 'red' }}>
                            {validatOverviewMessage}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Director</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter movie director"
                            value={director}
                            onChange={(e) => setDirector(e.target.value)}
                        />
                        <Form.Text className="text-muted" style={{ color: 'red' }}>
                            {validateDirectorMessage}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Categories</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter movie categories"
                            value={categories}
                            onChange={(e) => setCategories(e.target.value)}
                        />
                        <Form.Text className="text-muted" style={{ color: 'red' }}>
                            {validateDirectorMessage}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image (from URL)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter movie cover image"
                            value={poster_path}
                            onChange={(e) => setPosterPath(e.target.value)}
                        />
                        <Form.Text className="text-muted" style={{ color: 'red' }}>
                            {validatePosterPathMessage}
                        </Form.Text>
                        <br />
                        <Form.Text className="text-muted">
                            Preview image:
                        </Form.Text>
                        <br />
                        {/* <img
                            src={poster_path}
                            alt=""
                            width={150}
                        /> */}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Movie Release Date</Form.Label>
                        <br />
                        <DatePicker selected={release_date} onChange={(date: Date) => setReleaseDate(date)} />
                    </Form.Group>
                    <Button variant="primary" onClick={validateFields}>
                        {titleLabel}!
                    </Button>
                    <Link
                        className="btn btn-danger"
                        to={titleLabel === "Edit" ? `/details/${id}` : `/`}>
                        Cancel
                    </Link>
                </Form>
            </div>
        </div>
    )
}