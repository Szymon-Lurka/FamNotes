import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../reducers/appReducer';

const saveToLocalStorage = state => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
};

const loadFromLocalStorage = () => {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE
    || compose;
const presistedState = loadFromLocalStorage();
const store = createStore(appReducer, presistedState, composeEnhancers(applyMiddleware(thunk)));
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;