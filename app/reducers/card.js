import * as types from '../actions/types';

const IMG_ROOT = process.env.IMG_ROOT;

const card = (state = { src: `${IMG_ROOT}/back.png`, answer: 0 }, action) => {
    switch (action.type) {
        case types.FETCH_CARD_SUCCESS:
            return Object.assign({}, state, action.card);
        default:
            return state;
    }
};

export default card;
