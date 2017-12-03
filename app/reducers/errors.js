import * as types from '../actions/types';

const errors = (state = { open: false, message: '' }, action) => {
    switch (action.type) {
        case types.FETCH_CARD_FAILED:
        case types.SEND_ANSWER_FAILED:
        case types.CHANGE_SCREEN_FAILED:
            return Object.assign({}, state, {
                open: true,
                message: action.message
            });
        default:
            return state;
    }
};

export default errors;
