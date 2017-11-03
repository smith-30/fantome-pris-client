import * as types from '../actions/types';

const modal = (state = { open: false }, action) => {
    switch (action.type) {
        case types.OPEN:
            state.open = true;
            return state;
        case types.CLOSE:
            state.open = false;
            return state;
        default:
            return state;
    }
};


export default modal;
