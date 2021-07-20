import MoviesReducer from "./MoviesReducer";
import { combineReducers } from "redux";

const AllReducers = combineReducers({
    Movies: MoviesReducer
})

export default AllReducers;