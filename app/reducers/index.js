import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

// Todo initialStateの持ち方も変えたい

// Todo 一括importしたい
import users from './users';
import modal from './modal';
import game from './game';
import card from './card';
import errors from './errors';

const rootReducer = combineReducers({
    errors,
    card,
    game,
    modal,
    users,
    routing
});

export default rootReducer;
