import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MovieForm from '../components/Form/MovieForm';
import { Movie } from '../components/Movie/Movie';

export default function CreatePage() {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleCreate = (createdMovie: Movie) => {
        dispatch({
            type: 'CREATE',
            payload: [],
            new: createdMovie
        })

        history.push("/");
    }

    return (
        <>
            <div className="row">
                <h1>Create Movie</h1>
            </div>
            <div className="container">
                <MovieForm
                    handler={handleCreate}
                    titleLabel="Create"
                />
            </div>
        </>
    )
}