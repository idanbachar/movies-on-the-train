import MoviesReducer from "./MoviesReducer";
import { combineReducers } from "redux";

const AllReducers = combineReducers({
    movies: MoviesReducer
})

export default AllReducers;