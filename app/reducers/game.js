import * as types from '../actions/types';

const game = (state = { wsConn: {}, isPlay: false, score: 0 }, action) => {
    switch (action.type) {
        case types.PLAY:
            return Object.assign({}, state, {
                isPlay: true
            });
        case types.READY:
            return Object.assign({}, state, {
                isPlay: false
            });
        case types.CONNECT_WS:
            console.log('wsconn', action.wsConn);
            return Object.assign({}, state, {
                wsConn: action.wsConn
            });
        default:
            return state;
    }
};


export default game;
