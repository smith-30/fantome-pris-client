import * as types from '../actions/types';

const defaultSrc = `${process.env.IMG_ROOT}/back.png`;

const card = (state = { src: defaultSrc, answer: 0, isFlipped: false }, action) => {
    switch (action.type) {
        case types.FETCH_CARD_SUCCESS:
            return Object.assign({}, state, action.card);
        case types.SET_DEFAULT_CARD:
            return Object.assign({}, state, {
                src: defaultSrc,
                answer: 0,
                isFlipped: false,
            });
        default:
            return state;
    }
};

export default card;
