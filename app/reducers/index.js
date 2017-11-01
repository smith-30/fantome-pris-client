import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import users from './users';
import modal from './modal';
import game from './game';
import card from './card';

const rootReducer = combineReducers({
    card,
    game,
    modal,
    users,
    routing
});

export default rootReducer;
