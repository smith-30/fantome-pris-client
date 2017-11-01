import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import rootSaga from '../sagas';

export const history = createHistory();
const middleware = routerMiddleware(history);

export function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
              middleware,
              sagaMiddleware
            ),
            DevTools.instrument()
        )
    );
    store.runSaga = sagaMiddleware.run(rootSaga);
    return store;
}
