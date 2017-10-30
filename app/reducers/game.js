import * as types from '../actions/types';

const initialState = {
    wsConn: {},
    isPlay: false,
};

const game = (state = initialState, action) => {
    switch (action.type) {
        case types.PLAY:
            return Object.assign({}, state, {
                isPlay: true
            });
        case types.READY:
            return Object.assign({}, state, {
                isPlay: false
            });
        default:
            return initialState;
    }
};


export default game;
