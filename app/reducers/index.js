import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import users from './users';
import modal from './modal';
import game from './game';

const rootReducer = combineReducers({
    game,
    modal,
    users,
    routing
});

export default rootReducer;
