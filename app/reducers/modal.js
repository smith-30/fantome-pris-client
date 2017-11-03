import * as types from '../actions/types';

const modal = (state = { open: false }, action) => {
    switch (action.type) {
        case types.OPEN_MODAL:
            return Object.assign({}, state, {
                open: true,
            });
        case types.CLOSE_MODAL:
            return Object.assign({}, state, {
                open: false,
            });
        default:
            return state;
    }
};


export default modal;
