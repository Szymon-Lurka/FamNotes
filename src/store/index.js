import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../reducers/appReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE
    || compose;
const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;