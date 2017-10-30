import * as types from '../actions/types';

const initialState = {
    open: false,
};

const modal = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN:
            state.open = true;
            return state;
        case types.CLOSE:
            state.open = false;
            return state;
        default:
            return initialState;
    }
};


export default modal;
