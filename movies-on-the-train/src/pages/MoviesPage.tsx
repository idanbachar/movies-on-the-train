import { useSelector } from 'react-redux';
import MovieCard from '../components/Movie/MovieCard/MovieCard';
import { Movie } from '../components/Movie/Movie';

export default function MoviesPage() {

    const movies = useSelector((state: any) => state.movies);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>All Movies</h1>
            </div>
            <div className="container">
                {movies.map((movie: Movie) =>
                    <MovieCard
                        movie={movie}
                    />)}
            </div>
        </>
    )
}