import { useSelector } from 'react-redux';
import MovieCard from '../components/Movie/MovieCard/MovieCard';
import { Movie } from '../components/Movie/Movie';
import { useEffect, useState } from 'react';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function FavouriteMoviesPage() {

    const movies = useSelector((state: any) => state.movies);
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        if (movies !== undefined) {
            const favs = movies.filter((movie: Movie) => movie.isFavourite);
            if (favs !== undefined)
                setFavourites(favs);
        }
    }, [movies])

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>My Favourite Movies</h1>
            </div>
            <Row xs={1} md={5} className="g-5">
                {favourites.map((movie: Movie) =>
                    <Col>
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />
                    </Col>
                )}
            </Row>
        </>
    )
}