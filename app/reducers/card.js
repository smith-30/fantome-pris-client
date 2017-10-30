import * as types from '../actions/types';

const initialState = {
    src: '',
    answer: 0,
};

const card = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CARD:
            return state;
        default:
            return initialState;
    }
};


export default card;
