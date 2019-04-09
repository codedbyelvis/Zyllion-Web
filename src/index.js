import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {unregister} from './registerServiceWorker';
import store from './store';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../src/ducks/reducer';

// const store = createStore(reducer);

ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>, document.getElementById('root'));
// unregister();
