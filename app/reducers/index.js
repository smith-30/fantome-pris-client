import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
// import * as types from '../actions/types';
import isPlay from './play';

// const filter = (state = '', action) => {
//     switch (action.type) {
//         case types.FILTER:
//             return action.filter;
//         default:
//             return state;
//     }
// };


const rootReducer = combineReducers({
    // filter,
    isPlay,
    routing
});

export default rootReducer;
