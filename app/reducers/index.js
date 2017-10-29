import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import isPlay from './play';
import users from './users';
import modal from './modal';

const rootReducer = combineReducers({
    modal,
    users,
    isPlay,
    routing
});

export default rootReducer;
