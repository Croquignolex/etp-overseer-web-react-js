import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

import sagas from '../redux/sagas';
import reducers from '../redux/reducers';
import { emitCheckUserAuthentication } from "./user/actions";

// Fetch all middleware
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middleware = [thunk, sagaMiddleware, routeMiddleware];

// Necessary to apply on DOM interactions
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;

// Create global store
const store = createStore(
    combineReducers({
        ...reducers,
        router: connectRouter(history),
    }),
    composeEnhancers(applyMiddleware(...middleware))
);

// Run saga middleware
sagaMiddleware.run(sagas);

// Init global store
store.dispatch(emitCheckUserAuthentication());

export { store, history };