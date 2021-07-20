const initialState = [];

const MoviesReducer = (state = initialState, action) => {

    switch(action.type){
        case 'INIT':
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default MoviesReducer;