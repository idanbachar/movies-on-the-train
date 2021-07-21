const initialState = [];

const MoviesReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INIT':
            const { payload } = action;
            for (let i = 0; i < payload.length; i++) {
                const posterPath = payload[i].poster_path;
                payload[i].poster_path = `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`;
                payload[i].ratingStars = 0;
                payload[i].director = "";
                payload[i].categories = ""
            }
            state = action.payload;
            sessionStorage.setItem("movies", JSON.stringify(state));
            return state;
        case 'GET_FROM_SESSION':
            state = JSON.parse(sessionStorage.getItem("movies"));
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
        case 'CREATE':
            state.push(action.payload);
            sessionStorage.setItem("movies", JSON.stringify(state));
            return state;
    }
}

export default MoviesReducer;