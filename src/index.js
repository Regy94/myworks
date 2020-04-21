import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './data/redux-store';
import {Provider} from 'react-redux';

let reRender = (state) => {
    ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>
        , document.getElementById('root')
        ) ;
}

reRender(store.getState());

store.subscribe( () => {
    let state = store.getState();
    reRender(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
