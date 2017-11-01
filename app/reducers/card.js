import * as types from '../actions/types';

const initialState = {
    src: '',
    answer: 0,
};

const card = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CARD_SUCCESS:
            console.log(action);
            return Object.assign({}, state, action.card);
            // return state;
        default:
            return initialState;
    }
};


export default card;
