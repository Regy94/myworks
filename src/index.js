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

