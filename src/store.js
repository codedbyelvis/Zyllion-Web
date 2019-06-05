import {createStore, applyMiddleware} from 'redux';
import reducer from './ducks/reducer';
import promiseMiddleware from 'redux-promise-middleware';
import LoginState from './components/Signin/Signin-FC'

const defaultState = {
    LoginState
}

const store = createStore(reducer, defaultState);

export default store;

// export default createStore( reducer, applyMiddleware( promiseMiddleware() ) );