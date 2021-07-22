import { useSelector } from 'react-redux';
import MovieCard from '../components/Movie/MovieCard/MovieCard';
import { Movie } from '../components/Movie/Movie';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function MoviesPage() {

    const movies = useSelector((state: any) => state.movies);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>All Movies</h1>
            </div>
            <Row xs={1} md={5} className="g-5">
                {movies.map((movie: Movie) =>
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