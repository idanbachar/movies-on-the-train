const initialState = [];

const MoviesReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INIT':
            state = action.payload;
            sessionStorage.setItem("movies", JSON.stringify(state));
            return state;
        case 'GET_SESSION':
            state =  JSON.parse(sessionStorage.getItem("movies"));
            return state;
        case 'EDIT':
            const updated = state.map(movie =>
                movie.id == action.payload.id ?
                    action.payload :
                    movie);
            state = updated;
            sessionStorage.setItem("movies", JSON.stringify(state));
            return state;
        default:
            return state;
    }
}

export default MoviesReducer;