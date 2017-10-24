import * as types from '../actions/types';

const game = (state = true, action) => {
    switch (action.type) {
        case types.PLAY:
            return state;
        default:
            return state;
    }
};

export default game;
