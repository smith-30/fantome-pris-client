import * as types from '../actions/types';

const visible = 'visible';
const hidden = 'hidden';

const modal = (state = { visibility: {visibility: hidden}, isFullScreen: false}, action) => {
    switch (action.type) {
        case types.REQUEST_FULL_SCREEN_EXECUTE:
            return Object.assign({}, state, {
                visibility: {visibility: visible},
                isFullScreen: true,
            });
        case types.CANCEL_FULL_SCREEN_EXECUTE:
            return Object.assign({}, state, {
                visibility: {visibility: hidden},
                isFullScreen: false,
            });
        default:
            return state;
    }
};


export default modal;
