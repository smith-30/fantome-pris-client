import * as types from '../actions/types';

const card = (state = { src: '', answer: 0 }, action) => {
    switch (action.type) {
        case types.FETCH_CARD_SUCCESS:
            return Object.assign({}, state, action.card);
        default:
            return state;
    }
};

export default card;
