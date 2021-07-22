import { useSelector } from 'react-redux';
import MovieCard from '../components/Movie/MovieCard/MovieCard';
import { Movie } from '../components/Movie/Movie';
import { useEffect } from 'react';
import { useState } from 'react';

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
            <div className="container">
                {favourites.map((movie: Movie) =>
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />)}
            </div>
        </>
    )
}