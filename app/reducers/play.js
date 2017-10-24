import * as types from '../actions/types';

const play = (state = false, action) => {
    switch (action.type) {
        case types.PLAY:
            return true;
        case types.READY:
            return false;
        default:
            return state;
    }
};

export default play;
