import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <div className="topnav" id="myTopnav">
            <Link to="/">All Movies</Link>
            <Link to="/my-movies">My Favourites</Link>
            <Link to="/create">Add New Movie</Link>
        </div>
    )
}